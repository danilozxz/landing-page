import heroImage from '@/assets/Illustration.png'


export const HeroSection = () => {
    return (
        <section className='bg-[#f5f7fa]'>
            <div className='flex flex-col items-center py-8 px-6 lg:flex-row lg:justify-around  lg:pt-28 lg:pb-16 lg:px-24'>
                <div className='max-w-2xl'>
                    <h1 className='text-4xl text-[#4D4D4D] font-bold lg:text-6xl'>Lessons and insights <span className='text-[#4caf4f]'>from 8 years</span></h1>
                    <p className='text-[#4D4D4D] my-8'>Where to grow your business as a photographer: site or social media?</p>
                    <button className='bg-[#4caf4f] text-white py-2 px-4 rounded-sm hover:bg-green-400'>Register</button>
                </div>

                <div>
                    <img src={heroImage.src} alt="computador gigante e homem com notebook na mão" className='my-6 lg:my-0' />
                </div>
            </div>
            <div className='flex justify-center gap-2 p-2'>
                <div className='w-2 h-2 rounded-full bg-[#4caf4f]'></div>
                <div className='w-2 h-2 rounded-full bg-[#c3e1c7]'></div>
                <div className='w-2 h-2 rounded-full bg-[#c3e1c7]'></div>
            </div>
        </section>
    )
}