import icon from '@/assets/Body/Unlock/rafiki.png'


export const Unlock = () => {
    return (
        <section>
            <div className='mt-16 mb-8 flex flex-col items-center text-center lg:flex-row-reverse lg:justify-around lg:px-24'>
                <div className='text-start max-w-[660px]'>
                    <h2 className='text-[#4D4D4D] text-4xl font-semibold'>The unseen of spending three years at Pixelgrade</h2>
                    <p className='text-[#4D4D4D] my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className='bg-[#4caf4f] text-white py-2 px-4 rounded-sm hover:bg-green-400'>Learn more</button>
                </div>
                <img src={icon.src} alt="homem apontando para tela em que uma mulher digita sua senha" className='mt-8'/>
            </div>
        </section>
    )
}