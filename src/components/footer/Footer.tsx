import logo from '@/assets/Footer/Logo.png'
import icon1 from '@/assets/Footer/Social Icons.png'
import icon2 from '@/assets/Footer/Social Icons-1.png'
import icon3 from '@/assets/Footer/Social Icons-2.png'
import icon4 from '@/assets/Footer/Social Icons-3.png'

import send from '@/assets/Footer/send.png'

export const Footer = () => {
    return (
        <footer>
            <div className="bg-[#F5F7FA] flex flex-col items-center gap-4 p-6">
                <h1 className="text-4xl text-[#263238] font-bold max-w-[600px] text-center">Pellentesque suscipit fringilla libero eu.</h1>
                <button className='bg-[#4caf4f] text-white py-2 px-4 rounded-sm hover:bg-green-400'>Get a Demo (seta)</button>
            </div>
            <div className="bg-[#263238] text-[#F5F7FA] flex flex-col items-center gap-4 py-8 lg:flex-row lg:justify-evenly lg:gap-16 lg:p-4 ">
                <div className='flex flex-col gap-10'>
                    <img src={logo.src} alt="" />
                    <div>
                        <p>Copyright © 2020 Nexcent ltd.</p>
                        <p>All rights reserved</p>
                    </div>
                    <div className='flex gap-4'>
                        <img src={icon1.src} alt="Logo Instagram" />
                        <img src={icon2.src} alt="Logo" />
                        <img src={icon3.src} alt="Logo X" />
                        <img src={icon4.src} alt="Logo Youtube" />
                    </div>
                </div>
                <div className='flex flex-col gap-12 lg:gap-24 lg:flex-row'>
                    <div>
                        <p className='text-white text-xl font-bold mb-6'>Company</p>
                        <div className='flex flex-col gap-3'>

                            <p>About us</p>
                            <p>Blog</p>
                            <p>Contact us</p>
                            <p>Pricing</p>
                            <p>Testimonials</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-white text-xl font-bold mb-6'>Support</p>
                        <div className='flex flex-col gap-3'>

                            <p>Help center</p>
                            <p>Terms of service</p>
                            <p>Legal</p>
                            <p>Privacy policy</p>
                            <p>Status</p>

                        </div>
                    </div>
                    <div>
                        <p className='text-white text-xl font-bold mb-6'>Stay up to date</p>
                        <div className='bg-[#515B60] rounded-lg p-2 flex justify-around items-center'>
                            <input type="email" placeholder='Your email address' className='outline-none bg-transparent placeholder:text-white' />
                            <a href="#">
                                <img src={send.src} alt="enviar" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}