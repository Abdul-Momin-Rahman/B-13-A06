import React from 'react';

const Ready = () => {
    return (
        <div>
            <div className="py-15 lg:py-30 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                <div className='lg:w-10/12 mx-auto flex flex-col gap-10'>

                    <div className='flex flex-col gap-4 items-center text-center'>
                        <h1 className='text-[40px] font-extrabold text-white'>Ready to Transform Your Workflow?</h1>
                        <p className='text-base text-white'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                    </div>

                    <div className='flex flex-col gap-4 items-center text-center'>
                        <div className='flex gap-4 justify-center'>
                            <button className="btn font-semibold text-white text-base px-4 py-5 rounded-3xl"><span className="text-base font-semibold bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</span></button>
                            <button className="btn font-semibold text-white   text-base px-4 py-5 rounded-3xl bg-transparent">View Pricing</button>
                        </div>

                        <p className='text-base text-white text-center'>14-day free trial • No credit card required • Cancel anytime</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Ready;