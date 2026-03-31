import React from 'react';

const Digital = () => {
    

    return (
        <div className='w-10/12 mx-auto pt-15 lg:pt-30 flex flex-col mb-10'>
            
            <div className='text-center flex flex-col gap-4'>
                <h1 className='font-extrabold text-5xl text-[#101727]'>Premium Digital Tools</h1>
                <p className='text-base text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='py-1 px-2 rounded-3xl bg-[#F6F6F6] w-fit mx-auto'>
                    <button className="btn font-semibold text-white text-base px-4 py-5 rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Products</button>
                    <button className='btn btn-ghost px-4 py-5 rounded-3xl text-base text-[#25065D]'>Cart (2)</button>
                </div>
            </div>

        </div>
    );
};

export default Digital;