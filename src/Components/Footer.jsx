import { TbBrandInstagramFilled } from "react-icons/tb";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#101727] lg:pt-30 pt-15 pb-8'>
            <div className='lg:w-10/12 mx-auto space-y-20 flex flex-col '>

                <div className='topSection text-white grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-10 '>

                    <div className='flex flex-col gap-4 col-span-2 md:col-span-3 lg:col-span-1'>
                        <h1 className='text-white text-3xl font-bold lg:text-left text-center'>DigiTools</h1>
                        <p className='text-white text-base opacity-60 lg:text-left text-center'>Premium digital tools for creators, professionals, and businesses. <br /> Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className="flex flex-col gap-4 items-center lg:items-start">
                        <h1 className="text-xl font-medium">Product</h1>

                        <p className="text-base opacity-60">Features</p>
                        <p className="text-base opacity-60">Pricing</p>
                        <p className="text-base opacity-60">Templates</p>
                        <p className="text-base opacity-60">Integrations</p>

                    </div>
                    <div className="flex flex-col gap-4 items-center lg:items-start">
                        <h1 className="text-xl font-medium">Company</h1>

                        <p className="text-base opacity-60">About</p>
                        <p className="text-base opacity-60">Blog</p>
                        <p className="text-base opacity-60">Careers</p>
                        <p className="text-base opacity-60">Press</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center lg:items-start">
                        <h1 className="text-xl font-medium">Resources</h1>

                        <p className="text-base opacity-60">Documentation</p>
                        <p className="text-base opacity-60">Help Center</p>
                        <p className="text-base opacity-60">Community</p>
                        <p className="text-base opacity-60">Contact</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center ">
                        <h1 className="text-xl font-medium">Social Links</h1>
                        <div className="flex gap-3">
                            <div className='bg-white w-10 h-10 rounded-full flex items-center justify-center relative overflow-visible'>

                                <TbBrandInstagramFilled className="text-black w-5 h-5" />

                            </div>
                            <div className='bg-white w-10 h-10 rounded-full flex items-center justify-center relative overflow-visible'>

                                <IoLogoFacebook className="text-black w-5 h-5" />

                            </div>
                            <div className='bg-white w-10 h-10 rounded-full flex items-center justify-center relative overflow-visible'>

                                <FaXTwitter className="text-black w-5 h-5" />

                            </div>
                        </div>
                    </div>

                </div>


                <div className=' border-t border-white opacity-30 mb-8'>

            </div>

            <div className="bootmSection px-15 md:px-5 lg:px-0 text-white flex flex-col-reverse gap-5 md:flex-row justify-between">
                <p className="text-base opacity-40 text-center md:text-left">© 2026 Digitools. All rights reserved.</p>
                <div className="flex justify-between gap-6">
                    <p className="text-base opacity-40">Privacy Policy</p>
                    <p className="text-base opacity-40">Terms of Service</p>
                    <p className="text-base opacity-40">Cookies</p>
                </div>
            </div>

        </div>
        </div >
    );
};

export default Footer;