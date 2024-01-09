
export function ProcessRecoveryForm() {
    return (
        <form className='w-[80%] max-w-[400px] h-[80%]  flex flex-col justify-between '>
            <div className='h-[50%] flex flex-col justify-center gap-5'>
                <h3 className='font-semibold text'>{"Verify it's you"}  &#128110;</h3>
                <div className='w-full h-[40px] border border-secondary_3 rounded-md text-xs'>
                    <input className='w-full h-full outline-none focus:ring-0 focus:border-none border-none bg-transparent px-3'
                        placeholder='Enter recovery code' />
                </div>

                <button className='bg-primary_3 rounded-full px-3  py-3 font-semibold text-sm '>Begin Recovery</button>
            </div>
            <div className=''>
                <p className='text-xs text-secondary_4 text-center'>By continuing, I agree with the Privacy policy, Terms of Service.</p>
            </div>
        </form>
    )
}
