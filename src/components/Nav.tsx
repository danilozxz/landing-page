import logoImage from '@/assets/Logo.png'
import menuImage from '@/assets/menuHamburguer.svg'


export const Nav = () => {

    function click() {
        const nav = document.getElementById('nav');
        if (nav?.classList.contains('hidden')) {
            nav?.classList.remove('hidden')
            // nav.classList.remove('opacity-0')
        } else {
            nav?.classList.add('hidden')
            nav?.classList.remove('flex')
        }

    }

    return (
        <nav className='bg-[#f5f7fa]'>
            <img src={menuImage.src} alt="" className='absolute block cursor-pointer  lg:hidden' onClick={click} />
            <div className='flex justify-around items-center pt-2 lg:hidden'>
                <img src={logoImage.src} alt="logo" id='logo' className='lg:hidden' />
            </div>

            <div className='hidden lg:flex lg:flex-row lg:justify-around lg:p-4 lg:items-center' id='nav'>
                <img src={logoImage.src} alt="logo" id='logo' className='hidden lg:inline-block' />
                <div className='flex flex-col text-center w-full lg:w-auto lg:flex-row lg:gap-12'>
                    <a href="#" className='hover:text-[#4caf4f] p-2 border-b-2 border-gray-300 lg:border-none'>Home</a>
                    <a href="#" className='hover:text-[#4caf4f] p-2 border-b-2 border-gray-300 lg:border-none'>Service</a>
                    <a href="#" className='hover:text-[#4caf4f] p-2 border-b-2 border-gray-300 lg:border-none'>Feature</a>
                    <a href="#" className='hover:text-[#4caf4f] p-2 border-b-2 border-gray-300 lg:border-none'>Product</a>
                    <a href="#" className='hover:text-[#4caf4f] p-2 border-b-2 border-gray-300 lg:border-none'>Testmonial</a>
                    <a href="#" className='hover:text-[#4caf4f] p-2 border-b-2 border-gray-300 lg:border-none'>FAQ</a>
                </div>

                <div className='py-2 flex gap-4 justify-center border-b-2 border-gray-300 lg:border-none'>
                    <button className='text-[#4caf4f]'>Login</button>
                    <button className='bg-[#4caf4f] text-white py-2 px-4 rounded-sm hover:bg-green-400'>Sign up</button>
                </div>
            </div>

        </nav>
    )
}