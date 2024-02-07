import icon1 from '@/assets/Body/Achievements/Icon.png'
import icon2 from '@/assets/Body/Achievements/Icon-1.png'
import icon3 from '@/assets/Body/Achievements/Icon-2.png'
import icon4 from '@/assets/Body/Achievements/Icon-3.png'

export const Achievements = () => {
    return (
        <section>
            <div className='bg-[#f5f7fa] px-6 py-8 lg:px-24 lg:flex lg:justify-around lg:gap-8 '>
                <div className='text-center lg:max-w-[540px] lg:text-start'>
                    <h2 className='text-[#4D4D4D] font-bold text-4xl'>Helping a local <span className='text-[#4caf4f] block'>business reinvent itself</span></h2>
                    <p className='text-[#4D4D4D] mt-4 mb-8'>We reached here with our hard work and dedication</p>
                </div>
                <div className='flex flex-col items-center gap-4 lg:flex-row justify-center lg:items-start lg:gap-12'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-4'>
                            <img src={icon1.src} alt="ícone members" />
                            <div>
                                <span className='text-[#4D4D4D] font-bold text-2xl'>2,245,341</span>
                                <p className='text-[#4D4D4D] text-sm'>Members</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src={icon3.src} alt="ícone members" />
                            <div>
                                <span className='text-[#4D4D4D] font-bold text-2xl'>828,867</span>
                                <p className='text-[#4D4D4D] text-sm'>Event Bookings</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col gap-6 pb-8'>
                        <div className='flex gap-4'>
                            <img src={icon2.src} alt="ícone members" />
                            <div>
                                <span className='text-[#4D4D4D] font-bold text-2xl'>46,328</span>
                                <p className='text-[#4D4D4D] text-sm'>Clubs</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src={icon4.src} alt="ícone members" />
                            <div>
                                <span className='text-[#4D4D4D] font-bold text-2xl'>1,926,436</span>
                                <p className='text-[#4D4D4D] text-sm'>Payments</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}