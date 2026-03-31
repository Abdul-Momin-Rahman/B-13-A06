import user from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocket from '../assets/rocket.png'

const StepsSection = () => {
    return (
        <div className='py-30  bg-[#F9FAFC]'>
            <div className='lg:w-10/12 mx-auto space-y-10'>


                <div className='flex flex-col gap-4 items-center'>
                    <h1 className='font-extrabold text-3xl text-center lg:text-left lg:text-7xl text-[#101727]'>Get Started in 3 Steps</h1>
                    <p className='text-base text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='card-container flex flex-col lg:flex-row gap-8 justify-between'>
                    <div className='card-1 p-6 flex flex-col gap-4 bg-white rounded-2xl items-center pb-25 shadow-xl'>

                        <div className='flex justify-end w-full'>
                            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full flex justify-center items-center'>
                                <p className='font-bold text-sm text-white'>01</p>
                            </div>
                        </div>
                        <div className='bg-base-200 rounded-full w-25 h-25 flex items-center justify-center'>
                            <img src={user} alt="" />
                        </div>
                        <p className='font-bold text-2xl text-[#101727]'>Create Account</p>
                        <p className='text-base text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>

                    </div>
                    <div className='card-2 p-6 flex flex-col gap-4 bg-white rounded-2xl items-center pb-25 shadow-xl'>

                        <div className='flex justify-end w-full'>
                            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full flex justify-center items-center'>
                                <p className='font-bold text-sm text-white'>02</p>
                            </div>
                        </div>
                        <div className='bg-base-200 rounded-full w-25 h-25 flex items-center justify-center'>
                            <img src={packageImg} alt="" />
                        </div>
                        <p className='font-bold text-2xl text-[#101727]'>Choose Products</p>
                        <p className='text-base text-[#627382] text-center'>Browse our catalog and select the tools that fit your needs.</p>

                    </div>
                    <div className='card-3 p-6 flex flex-col gap-4 bg-white rounded-2xl items-center pb-25 shadow-xl'>

                        <div className='flex justify-end w-full'>
                            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full flex justify-center items-center'>
                                <p className='font-bold text-sm text-white'>03</p>
                            </div>
                        </div>
                        <div className='bg-base-200 rounded-full w-25 h-25 flex items-center justify-center'>
                            <img src={rocket} alt="" />
                        </div>
                        <p className='font-bold text-2xl text-[#101727]'>Start Creating</p>
                        <p className='text-base text-[#627382] text-center'>Download and start using your premium tools immediately.</p>

                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default StepsSection;