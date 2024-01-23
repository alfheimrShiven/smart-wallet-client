import useUserStore from "@services/states/userStore";
import { publicClient } from "@utils/viemClient";
import { useEffect, useState } from "react";
import { TbArrowMoveUp } from "react-icons/tb";
import { TbArrowMoveDown } from "react-icons/tb";
import { formatEther } from "viem";

export function Account() {
    const { user } = useUserStore()
    const [balance, setBalance] = useState<number>(0)
    console.log(user?.smartWallet)

    const getUserBalance = async () => {
        const balance = await publicClient.getBalance({
            //@ts-ignore
            address: `0x${user?.smartWallet.substring(2)}`,
        })

        setBalance(Number(formatEther(balance)))
    }

    useEffect(() => {
        getUserBalance()
    }, [user])

    return (
        <div className='h-[50%]  flex flex-col gap-3 border-b'>
            <div className='h-[85%] w-full bg-primary_4 rounded-b-xl py-3 px-4 '>
                <div className='h-[80%] flex flex-col justify-center gap-3'>
                    <h3 className='font-semibold text-2xl text-secondary_3'>Smart Wallet Address</h3>
                    <small className=' text-secondary_4'>{user?.smartWallet}</small>
                </div>
                <div className='h-[20%] '>
                    <p className='text-secondary_4 font-semibold text-xs'>Total Balance</p>
                    <p><span className='text-secondary_2'>{balance.toFixed(5)}</span> <span className='text-secondary_4'>MATIC</span></p>
                </div>
            </div>
            <div className='h-[15%] flex gap-x-4 justify-between text-black'>
                <button className="rounded-md flex  items-center justify-center w-[50%] h-8 space-x-2 bg-secondary_2 font-semibold"><TbArrowMoveDown size={15} />Faucet</button>
                <button className="rounded-md flex  items-center justify-center w-[50%] h-8 space-x-2 bg-secondary_2 font-semibold"><TbArrowMoveUp size={15} />Send</button>

            </div>
        </div>
    )
}
