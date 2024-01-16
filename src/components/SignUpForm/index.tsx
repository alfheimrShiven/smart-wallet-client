import React, { useEffect, useRef, useState } from 'react'
import { ConnectWallet, useConnectionStatus, useWallet, useSmartWallet, embeddedWallet, useDisconnect } from '@/providers/ThirdwebProvider';


export default function index() {
    const [email, setEmail] = useState<string | undefined>(undefined)
    const disconnect = useDisconnect()

    const connectionStatus = useConnectionStatus();
    const embeddedWalletObj = useWallet("embeddedWallet");

    const { connect, predictAddress } = useSmartWallet(embeddedWallet(), {
        factoryAddress: `${process.env.NEXT_PUBLIC_ACCOUNT_FACTORY_ADDRESS}`,
        gasless: true,
    });

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


    const getUserData = async () => {
        const email = await embeddedWalletObj?.getEmail();
        const wallet = await embeddedWalletObj?.getAddress()
        console.log("Predicted Normal Wallet address", wallet)
        setEmail(email)

        if (wallet) {
            const address = await predictAddress({
                personalWalletAddress: wallet,
            });
            console.log("Predicted Smart Wallet address", address);
        }
    }


    useEffect(() => {
        getUserData()
    })

    return (
        <form className='w-[80%] max-w-[400px] h-[80%]  flex flex-col justify-between '>
            {/* <button type='button' onClick={onClick} className='border'>Click Test</button> */}
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
                <button type='button' className='bg-primary_3 rounded-full px-3  py-3 font-semibold text-sm '>Create Wallet</button>
                <button type='button' className='bg-secondary_2 rounded-full px-3  py-3 font-semibold text-sm '>Start Wallet Recovery</button>
            </div>}
            <div className=''>
                <p className='text-xs text-secondary_4 text-center'>By continuing, I agree with the Privacy policy, Terms of Service.</p>
            </div>
        </form>
    )
}
