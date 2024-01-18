import React, { useEffect, useRef, useState } from 'react'
import { ConnectWallet, useConnectionStatus, useWallet, useDisconnect, useContract, useContractWrite, Web3Button } from '@/providers/ThirdwebProvider';
import abi from "@/abi/AccountFactory.json"
import { ethers } from 'ethers';


export default function index() {
    const [email, setEmail] = useState<string | undefined>(undefined)
    const [wallet, setWallet] = useState<string | undefined>(undefined)
    const disconnect = useDisconnect()

    const connectionStatus = useConnectionStatus();
    const embeddedWalletObj = useWallet("embeddedWallet");

    const { data: contract } = useContract(`${process.env.NEXT_PUBLIC_ACCOUNT_FACTORY_ADDRESS}`, abi);
    const { mutateAsync, isLoading, error } = useContractWrite(
        contract,
        "createAccount",
    );

    // const { connect, predictAddress } = useSmartWallet(embeddedWallet(), {
    //     factoryAddress: `${process.env.NEXT_PUBLIC_ACCOUNT_FACTORY_ADDRESS}`,
    //     gasless: true,
    // });

    // const onClick = async () => {
    //     await connect({
    //         connectPersonalWallet: async (embeddedWallet) => {
    //             // login with google and connect the embedded wallet
    //             const authResult = await embeddedWallet.authenticate({
    //                 strategy: 'google'
    //             });
    //             const h = await embeddedWallet.connect({ authResult });
    //             console.log(h)
    //         },
    //     });
    // };

    const createWallet = async () => {
        // @ts-ignore
        const data = mutateAsync({ args: [wallet, ethers.utils.formatBytes32String(email)] })
        console.log(data)
    }


    const getUserData = async () => {
        const email = await embeddedWalletObj?.getEmail();
        const wallet = await embeddedWalletObj?.getAddress()
        setEmail(email)
        setWallet(wallet)

        if (wallet) {
            console.log(" Normal Wallet address", wallet)
        }
    }
    useEffect(() => {
        getUserData()
    })

    return (
        <form className='w-[80%] max-w-[400px] h-[80%]  flex flex-col justify-between '>
            <button type='button' onClick={() => disconnect()} className='border'>Disconnect</button>
            {(connectionStatus == "connecting" || connectionStatus == "unknown") && <div className='h-[50%] flex flex-col justify-center gap-5'>
                <h3 className='font-semibold text'>Welcome  &#128075;</h3>
                <p>Loading...</p>
            </div>
            }
            {connectionStatus != "connected" && connectionStatus != "connecting" && connectionStatus != "unknown" && <div className='h-[50%] flex flex-col justify-center gap-5'>
                <h3 className='font-semibold text'>Welcome  &#128075; </h3>
                <ConnectWallet btnTitle="Go To Wallet" />
            </div>
            }

            {(connectionStatus === "connected") && <div className='h-[50%] flex flex-col justify-center gap-5'>
                <h3 className='font-semibold text'>No Wallet Detected  &#128075;</h3>
                {/* <div className='w-full h-[40px] border border-secondary_3 rounded-md text-xs'>
                    <input className='w-full h-full outline-none focus:ring-0 focus:border-none border-none bg-transparent px-3'
                        placeholder='Email' />
                </div>
                <div className='w-full h-[40px] border border-secondary_3 rounded-md text-xs'>
                    <input className='w-full h-full outline-none focus:ring-0 focus:border-none border-none bg-transparent px-3'
                        placeholder='OTP' />
                </div> */}
                <button type='button' onClick={createWallet} className='bg-primary_3 rounded-full px-3  py-3 font-semibold text-sm '>Create Wallet</button>

                <button type='button' className='bg-secondary_2 rounded-full px-3  py-3 font-semibold text-sm '>Start Wallet Recovery</button>
            </div>}
            <div className=''>
                <p className='text-xs text-secondary_4 text-center'>By continuing, I agree with the Privacy policy, Terms of Service.</p>
            </div>
        </form>
    )
}
