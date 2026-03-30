
const Navbar = () => {
    return (
        <div className="shadow-sm">
            <div class="navbar bg-base-100 lg:w-10/12 mx-auto py-5">


                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div class="navbar-start flex justify-center lg:justify-start">
                    <img className="w-45" src="/DigiTools.png" alt="" />
                </div>

                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li className="font-semibold text-[#101727] text-base"><a>Products</a></li>
                        <li className="font-semibold text-[#101727] text-base"><a>Features</a></li>
                        <li className="font-semibold text-[#101727] text-base"><a>Pricing</a></li>
                        <li className="font-semibold text-[#101727] text-base"><a>Testimonials</a></li>
                        <li className="font-semibold text-[#101727] text-base"><a>FAQ</a></li>
                    </ul>
                </div>

                <div className="navbar-end  gap-4 ml-10">
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                    <span className="badge-sm indicator-item"></span> 
                                </div>
                            </div>

                        </div>

                    </div>

                    <button className="hover:text-[#101727]/50 cursor-pointer font-semibold text-[#101727] text-base">Login</button>
                    <button className="btn font-semibold text-white text-base px-4 py-5 rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] hidden md:flex">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;