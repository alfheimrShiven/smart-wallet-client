import { useEffect, useState } from 'react'
//import abi from "@abi/AccountFactory.json"
import { usePrivy, useWallets } from '@privy-io/react-auth';
//import { usePrivyWagmi } from '@privy-io/wagmi-connector';




export default function index() {
    const [email, setEmail] = useState<string | undefined>(undefined)
    const [wallet, setWallet] = useState<string | undefined>(undefined)

    // const { wallet: activeWallet, setActiveWallet } = usePrivyWagmi();

    const { wallets } = useWallets();
    console.log(wallets)

    const { login, ready, authenticated, user, logout } = usePrivy()
    console.log(user)



    // useEffect(() => {
    //     setActiveWallet(wallets[0])
    // }, [wallets])




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
                <button type='button' className='bg-primary_3 rounded-full px-3  py-3 font-semibold text-sm '>Create Wallet</button>

                <button type='button' className='bg-secondary_2 rounded-full px-3  py-3 font-semibold text-sm '>Start Wallet Recovery</button>
                <button type='button' onClick={logout} className='bg-secondary_4 rounded-full px-3  py-3 font-semibold text-sm '>Logout</button>
            </div>}
            <div className=''>
                <p className='text-xs text-secondary_4 text-center'>By continuing, I agree with the Privacy policy, Terms of Service.</p>
            </div>
        </form>
    )
}
