import { Account } from "@components/Dashboard"


export default function Dashboard() {
    return (
        <div className="h-full w-full  flex justify-center items-center">
            <div className='w-[80%] max-w-[400px] h-[90%]  flex flex-col border border-secondary_1 rounded-xl p-3 '>
                <Account />
                <div className='h-[50%] flex flex-col justify-between pt-4'>
                    <button className='bg-primary_3 rounded-md px-3  py-3 font-semibold text-sm '>Add Guardians</button>
                    <p className='text-xs text-secondary_4 text-center'>By continuing, I agree with the Privacy policy, Terms of Service.</p>
                </div>
            </div>
        </div>
    )
}
