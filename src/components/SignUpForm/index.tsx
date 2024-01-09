import React, { useRef } from 'react'
import { AreonNetworkTestnet, EmbeddedWallet, ConnectWallet } from '@/providers/ThirdwebProvider';

export default function index() {
    // const box = useRef<HTMLButtonElement>(null)
    // const embeddedWallet = new EmbeddedWallet({
    //     chain: AreonNetworkTestnet, //  chain to connect to
    //     clientId: `{ process.env.NEXT_PUBLIC_CLIENT_KEY }`, // Your thirdweb client ID
    // });


    return (
        <form className='w-[80%] max-w-[400px] h-[80%]  flex flex-col justify-between '>
            <div className='h-[50%] flex flex-col justify-center gap-5'>
                <h3 className='font-semibold text'>Hey Bud  &#128075;</h3>
                <div className='w-full h-[40px] border border-secondary_3 rounded-md text-xs'>
                    <input className='w-full h-full outline-none focus:ring-0 focus:border-none border-none bg-transparent px-3'
                        placeholder='Email' />
                </div>
                <div className='w-full h-[40px] border border-secondary_3 rounded-md text-xs'>
                    <input className='w-full h-full outline-none focus:ring-0 focus:border-none border-none bg-transparent px-3'
                        placeholder='OTP' />
                </div>
                <ConnectWallet />

                {/* <button type='button' onClick={handleLogin} className='bg-primary_3 rounded-full px-3  py-3 font-semibold text-sm '>Create Wallet</button> */}
            </div>
            <div className=''>
                <p className='text-xs text-secondary_4 text-center'>By continuing, I agree with the Privacy policy, Terms of Service.</p>
            </div>
        </form>
    )
}
