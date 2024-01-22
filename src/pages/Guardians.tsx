import { Account } from "@components/Dashboard"
import { GuardianList } from "@components/Guardians"
import { GuardianForm } from "@components/Guardians/GuardianForm"


export default function Guardians() {
    return (
        <div className="h-full w-full  flex justify-center items-center">
            <div className='w-[80%] max-w-[400px] h-[90%]  flex flex-col gap-y-3 border border-secondary_1 rounded-xl p-3 '>
                <h3 className="text-sm font-semibold text-center"> Add Guardian</h3>
                <div className="h-[45%]">
                    <GuardianForm />
                </div>
                <div className='h-[45%] flex flex-col justify-between pt-4'>
                    <GuardianList />
                </div>
            </div>
        </div>
    )
}
