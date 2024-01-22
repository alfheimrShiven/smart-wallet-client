import { AccountList, AccountState } from "@components/GuardianPortal";



export default function GuardianPortal() {
    return (
        <div className="h-full w-full py-3  px-3">
            <div className="h-[10%] flex justify-between  items-center">
                <h1 className="font-bold text-2xl ">Guardian Portal</h1>
                <button className='bg-primary_3 rounded-md px-3  py-3 h-fit  font-semibold text-sm '>Connect Wallet</button>
            </div>

            <div className="h-[90%] w-full flex justify-center items-center">
                {/* <AccountList /> */}
                {/* <AccountLockRequest /> */}
                <AccountState />
            </div>
        </div>
    )
}