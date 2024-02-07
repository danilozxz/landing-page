

import arrowIcon from '@/assets/Body/Costumers/Right.png'


export const Upadates = () => {
    return (
        <section>
            <div className='px-6 pt-8 pb-20 flex flex-col items-center'>
                <div className='text-center'>
                    <h1 className='text-[#4D4D4D] text-4xl font-semibold'>Caring is the new marketing</h1>
                    <p className='text-[#4D4D4D] max-w-[628px] my-4'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
                </div>
                <div className='flex flex-col flex-wrap items-center gap-20 mt-4 lg:flex-row justify-evenly'>
                    <div className='bg-[url(../assets/Body/Updates/imagem1.png)] bg-contain bg-no-repeat h-72 lg:w-[368px]'>
                        <div className='p-2 bg-[#F5F7FA] w-60 shadow-lg text-center mx-auto mt-40 rounded-md lg:mt-56'>
                            <h3 className='text-[#4D4D4D] font-semibold'>Creating Streamlined Safeguarding Processes with OneRen</h3>
                            <p className='text-[#4caf4f] font-bold'>Readmore <img src={arrowIcon.src} alt="seta" className='inline-block' /></p>
                        </div>
                    </div>
                    <div className='bg-[url(../assets/Body/Updates/imagem2.png)] bg-contain bg-no-repeat h-72 lg:w-[368px]'>
                        <div className='p-2 bg-[#F5F7FA] w-60 shadow-lg text-center mx-auto mt-40 rounded-md lg:mt-56'>
                            <h3 className='text-[#4D4D4D] font-semibold'>What are your safeguarding responsibilities and how can you manage them?</h3>
                            <p className='text-[#4caf4f] font-bold'>Readmore <img src={arrowIcon.src} alt="seta" className='inline-block' /></p>
                        </div>
                    </div>
                    <div className='bg-[url(../assets/Body/Updates/imagem3.png)] bg-contain bg-no-repeat h-72 lg:w-[368px]'>
                        <div className='p-2 bg-[#F5F7FA] w-60 shadow-lg text-center mx-auto mt-40 rounded-md lg:mt-56'>
                            <h3 className='text-[#4D4D4D] font-semibold'>Revamping the Membership Model with Triathlon Australia</h3>
                            <p className='text-[#4caf4f] font-bold'>Readmore <img src={arrowIcon.src} alt="seta" className='inline-block' /></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}