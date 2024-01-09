

export function GuardianForm() {
    return (
        <form className='h-full bg-primary_4 rounded-xl py-3 px-4   flex flex-col justify-between '>
            <div className='h-full flex flex-col justify-center gap-5'>

                <div className='w-full h-[40px] border border-secondary_3 rounded-md text-xs'>
                    <input className='w-full h-full outline-none focus:ring-0 focus:border-none border-none bg-transparent px-3'
                        placeholder='Name' />
                </div>
                <div className='w-full h-[40px] border border-secondary_3 rounded-md text-xs'>
                    <input className='w-full h-full outline-none focus:ring-0 focus:border-none border-none bg-transparent px-3'
                        placeholder='Address' />
                </div>

                <button className='bg-primary_3 rounded-full px-3  py-3 font-semibold text-sm '>Save</button>
            </div>

        </form>
    )
}
