import icon from '@/assets/Body/Calender/pana.png'


export const Calender = () => {
    return (
        <section>
            <div className='my-16 px-6 flex flex-col items-center text-center lg:flex-row-reverse lg:justify-around lg:px-24'>
                <div className='text-start max-w-[660px]'>
                    <h2 className='text-[#4D4D4D] text-4xl font-semibold'>How to design your site footer like we did</h2>
                    <p className='text-[#4D4D4D] my-6'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className='bg-[#4caf4f] text-white py-2 px-4 rounded-sm hover:bg-green-400'>Learn more</button>
                </div>
                <img src={icon.src} alt="homem apontando para tela em que uma mulher digita sua senha" className='mt-8'/>
            </div>
        </section>
    )
}