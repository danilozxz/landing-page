import img from '@/assets/Body/Costumers/image 9.png';

import icon1 from '@/assets/Clients/Logo.png'
import icon2 from '@/assets/Clients/Logo-1.png'
import icon3 from '@/assets/Clients/Logo-2.png'
import icon4 from '@/assets/Clients/Logo-3.png'
import icon5 from '@/assets/Clients/Logo-4.png'
import icon6 from '@/assets/Clients/Logo-5.png'

import arrowIcon from '@/assets/Body/Costumers/Right.png'

export const Costumers = () => {
    return (
        <section>
            <div className='bg-[#f5f7fa] px-8 py-8 flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-center lg:gap-4'>
                <img src={img.src} alt="ovni"/>

                <div className='flex flex-col gap-5 lg:max-w-[848px]'>
                    <p className='text-[#4D4D4D]'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>

                    <p className='text-[#4caf4f] font-bold text-xl'>Tim Smith</p>
                    <p className='text-[#89939E]'>British Dragon Boat Racing Association</p>

                    <div className='flex flex-wrap justify-between items-center'>
                        <img src={icon1.src} alt="LogoEmpresa"/>
                        <img src={icon2.src} alt="LogoEmpresa"/>
                        <img src={icon3.src} alt="LogoEmpresa"/>
                        <img src={icon4.src} alt="LogoEmpresa"/>
                        <img src={icon5.src} alt="LogoEmpresa"/>
                        <img src={icon6.src} alt="LogoEmpresa"/>

                        <span className='text-[#4caf4f] font-bold cursor-pointer text-xl'>Meet all customers <img src={arrowIcon.src} alt="seta" className='inline-block' /></span>
                    </div>
                </div>

            </div>
        </section>
    )
}