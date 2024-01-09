import { IoWallet } from "react-icons/io5";
import { FaLock, FaLockOpen } from "react-icons/fa";

export function AccountLockRequest() {
    return (
        <div className="h-[90%] w-[90%] max-w-[450px] rounded-xl bg-primary_4  py-4">
            <div className="h-[15%]  flex items-center font-semibold text-sm gap-x-2 justify-center">
                <IoWallet size={15} />
                <p>0xb794f5ea0ba39494ce839613fffba74279579268</p>
            </div>
            <div className="h-[85%]  flex  flex-col items-center gap-4">
                <p className='text-xs text-secondary_4 text-center'>By clicking the button below, you approve the locking of this account</p>
                <FaLockOpen size={100} className="text-secondary_4" />
                <button className='border border-secondary_2 hover:bg-secondary_2 rounded-md px-6  py-2 h-fit  font-semibold text-sm flex gap-3 items-center '>
                    <FaLock size={15} />
                    Approve
                </button>
            </div>
        </div>
    )
}
