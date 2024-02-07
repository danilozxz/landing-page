import icon1 from '@/assets/Community/Icon.png'
import icon2 from '@/assets/Community/Icon-1.png'
import icon3 from '@/assets/Community/Icon-2.png'

export const Community = () => {
    return (
        <section className='mt-14 lg:px-24'>
            <div>
                <div className="text-center">
                    <h2 className="text-[#4D4D4D] text-4xl font-semibold">Manage your entire community in a single system</h2>
                    <p className="text-[#4D4D4D] mt-2">Who is Nextcent suitable for?</p>
                </div>

                <div className='mt-12 flex flex-col items-center gap-8 lg:flex-row lg:justify-around lg:items-start'>
                    <div className='w-full h-72 text-center flex flex-col items-center p-3 shadow-md rounded-lg sm:w-80'>
                        <img src={icon1.src} alt="" />
                        <h3 className='text-[#4D4D4D] text-2xl font-bold mt-4 mb-2'>Membership Organisations</h3>
                        <p className="text-[#4D4D4D]">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className='w-full h-72 text-center flex flex-col items-center p-3 shadow-md rounded-lg sm:w-80'>
                        <img src={icon2.src} alt="" />
                        <h3 className='text-[#4D4D4D] text-2xl font-bold mt-4 mb-2'>National Associations</h3>
                        <p className="text-[#4D4D4D]">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className='w-full h-72 text-center flex flex-col items-center p-3 shadow-md rounded-lg sm:w-80'>
                        <img src={icon3.src} alt="" />
                        <h3 className='text-[#4D4D4D] text-2xl font-bold mt-4 mb-2 '>Clubs And Groups</h3>
                        <p className="text-[#4D4D4D]">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>
        </section>
    )
}