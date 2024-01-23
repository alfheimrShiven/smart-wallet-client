import { useEffect } from 'react'
import abi from "@abi/AccountFactory.json"
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { encodeAbiParameters, parseAbiParameters } from 'viem'
import { getViemWalletClient, publicClient } from '@utils/viemClient';
import { getAccount } from 'wagmi/actions';
import { usePrivyWagmi } from '@privy-io/wagmi-connector';
import { useNavigate } from 'react-router-dom';
import useUserStore from '@services/states/userStore';



export default function index() {
    const { wallet: activeWallet, setActiveWallet } = usePrivyWagmi();
    const { setUser } = useUserStore()
    const navigate = useNavigate()
    const { wallets } = useWallets();
    console.log(wallets)
    const { login, authenticated, user, logout } = usePrivy()


    const createAccount = async () => {
        const walletClient = await getViemWalletClient(wallets)

        const email = encodeAbiParameters(
            parseAbiParameters('string'),
            [user.google.email || user.discord.email || user.apple.email || user.email.address]
        )

        const { request } = await publicClient.simulateContract({
            address: import.meta.env.VITE_ACCOUNT_FACTORY_ADDRESS,
            abi: abi,
            functionName: 'createAccount',
            args: [wallets[0].address, email],
            account: `0x${wallets[0].address.substring(2)}`
        })

        const hash = await walletClient.writeContract(request)
        const transactionReceipt = await publicClient.waitForTransactionReceipt(
            {
                hash
            }
        )

        console.log(transactionReceipt)
        getUserWallet()
    }



    const getUserWallet = async () => {
        const data = await publicClient.readContract({
            address: import.meta.env.VITE_ACCOUNT_FACTORY_ADDRESS,
            abi: abi,
            functionName: 'getAccountsOfSigner',
            args: [wallets[0].address]
        })

        console.log(data)
        //@ts-ignore
        if (data && data?.length > 0) {
            setUser({ smartWallet: data[0] })
            navigate('/dashboard');
        }
    }

    useEffect(() => {
        setActiveWallet(wallets[0])
        //read user's wallet 
        getUserWallet()
    }, [wallets])


    return (
        <form className='w-[80%] max-w-[400px] h-[80%]  flex flex-col justify-between '>


            {!authenticated && <div className='h-[50%] flex flex-col justify-center gap-5'>
                <h3 className='font-semibold text'>Welcome  &#128075; </h3>
                <button onClick={login} type='button' className='bg-primary_3 rounded-full px-3  py-3 font-semibold text-sm '>Get Started</button>
            </div>}

            {authenticated && <div className='h-[50%] flex flex-col justify-center gap-5'>
                <h3 className='font-semibold text'>No Wallet Detected  &#128075;</h3>
                {/* <div className='w-full h-[40px] border border-secondary_3 rounded-md text-xs'>
                    <input className='w-full h-full outline-none focus:ring-0 focus:border-none border-none bg-transparent px-3'
                        placeholder='Email' />
                </div>
                <div className='w-full h-[40px] border border-secondary_3 rounded-md text-xs'>
                    <input className='w-full h-full outline-none focus:ring-0 focus:border-none border-none bg-transparent px-3'
                        placeholder='OTP' />
                </div> */}
                <button onClick={createAccount} type='button' className='bg-primary_3 rounded-full px-3  py-3 font-semibold text-sm '>Create Wallet</button>

                <button type='button' className='bg-secondary_2 rounded-full px-3  py-3 font-semibold text-sm '>Start Wallet Recovery</button>
                <button type='button' onClick={logout} className='bg-secondary_4 rounded-full px-3  py-3 font-semibold text-sm '>Logout</button>
            </div>}
            <div className=''>
                <p className='text-xs text-secondary_4 text-center'>By continuing, I agree with the Privacy policy, Terms of Service.</p>
            </div>
        </form>
    )
}
