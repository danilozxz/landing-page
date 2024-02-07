import logoC1 from '@/assets/Clients/Logo.png'
import logoC2 from '@/assets/Clients/Logo-1.png'
import logoC3 from '@/assets/Clients/Logo-2.png'
import logoC4 from '@/assets/Clients/Logo-3.png'
import logoC5 from '@/assets/Clients/Logo-4.png'
import logoC6 from '@/assets/Clients/Logo-5.png'
import logoC7 from '@/assets/Clients/Logo-6.png'


export const Client = () => {
    return (
        <section className="bg-white mb-12 lg:px-24">
            <div>
                <div className='text-center'>
                    <h2 className='text-[#4D4D4D] text-2xl font-bold'>Our Clients</h2>
                    <p className=' text-[#4D4D4D]'>We have been working with some Fortune 500+ clients</p>
                </div>
                <div className="flex flex-wrap justify-around my-4 gap-2">
                    <img src={logoC1.src} alt="logo1" />
                    <img src={logoC2.src} alt="logo2" />
                    <img src={logoC3.src} alt="logo3" />
                    <img src={logoC4.src} alt="logo4" />
                    <img src={logoC5.src} alt="logo5" />
                    <img src={logoC6.src} alt="logo6" />
                    <img src={logoC7.src} alt="logo7" />
                </div>
            </div>
        </section>
    )
}