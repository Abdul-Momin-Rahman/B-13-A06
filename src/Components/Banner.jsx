import banner from '../assets/banner.png'


const Banner = () => {
    return (
        <div className='lg:w-10/12 mx-auto py-10 lg:py-20'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-15'>
                <div className="left flex flex-col gap-8">
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center  gap-1.25 py-2 px-4 bg-[#E1E7FF] rounded-3xl mx-auto lg:mx-0 justify-center w-fit'>
                            <img className='w-4 h-4' src="/Group5.png" alt="" />
                            <p className='bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-base font-medium'>New: AI-Powered Tools Available</p>
                        </div>
                        <h1 className='font-extrabold text-3xl text-center lg:text-left lg:text-7xl text-[#101727]'>Supercharge Your Digital Workflow</h1>
                        <p className='text-lg text-[#627382] text-center lg:text-left'>
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                            <br />
                            Explore Products
                        </p>
                    </div>

                    <div className='flex gap-4 justify-center lg:justify-start'>
                        <button className="btn font-semibold text-white text-base px-4 py-5 rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">Explore Products</button>

                        <button class="btn    rounded-3xl text-base px-4 py-5 bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold">
                            <img src="/Vector.png" alt="" />
                            Watch Demo
                        </button>
                    </div>
                </div>
                <div className="right w-125 h-150 flex justify-center items-center">
                    <img className='w-full' src={banner} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Banner;