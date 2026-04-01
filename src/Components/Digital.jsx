const Digital = ({activeTab , setActiveTab, cart}) => {
    
    // console.log(activeTab);
    return (
        <div className='lg:w-10/12 mx-auto pt-15 lg:pt-30 flex flex-col mb-10'>
            
            <div className='text-center flex flex-col gap-4'>
                <h1 className='font-extrabold text-3xl lg:text-5xl text-[#101727]'>Premium Digital Tools</h1>
                <p className='text-base text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className='py-1 px-2 rounded-3xl bg-[#F6F6F6] w-fit mx-auto'>
                    <button className={` ${activeTab === 'products' ? 'btn font-semibold  text-base px-4 py-5 rounded-3xl text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : 'btn btn-ghost px-4 py-5 rounded-3xl text-base text-[#25065D]'} `} onClick={()=> setActiveTab('products')}>Products</button>
                    <button className={` ${activeTab === 'cart' ? 'btn font-semibold  text-base px-4 py-5 rounded-3xl text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : 'btn btn-ghost px-4 py-5 rounded-3xl text-base text-[#25065D]'} `} onClick={() => setActiveTab('cart')}>Cart ({cart.length})</button>
                </div>
            </div>

        </div>
    );
};

export default Digital;