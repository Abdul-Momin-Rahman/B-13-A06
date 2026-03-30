import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
    return (
        <div className='w-10/12 mx-auto py-30 space-y-10'>

            <div className='flex flex-col gap-4 items-center'>
                <h1 className='font-extrabold text-5xl text-[#101727] text-center'>Simple, Transparent Pricing</h1>
                <p className='text-base text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>


            <div className='card-container flex flex-col lg:flex-row gap-8 justify-between'>
                <div className='card-1 p-6 flex flex-col gap-4 bg-[#F9FAFC] rounded-2xl shadow-sm w-full flex-1'>

                    <div>
                        <h1 className="font-bold text-2xl text-[#101727]">Starter</h1>
                        <p className="text-base text-[#627382]">Perfect for getting started</p>
                    </div>

                    <p className="text-xl text-[#627382]"><span className="font-bold text-[40px] text-[#101727]">$0</span>/month</p>

                    <ul className="items-start">
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium text-[#627382]">Access to 10 free tools</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium text-[#627382]">Basic templates</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium text-[#627382]">Community support</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium text-[#627382]">1 project per month</p>
                        </div>

                    </ul>


                    <button className="btn font-semibold text-white text-base px-4 py-5 rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-auto">Get Started Free</button>

                </div>

                <div className='card-2 relative text-white p-6 flex flex-col gap-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl shadow-sm w-full flex-1'>

                    <div className="px-3 py-1.5 rounded-3xl bg-[#FEF3C6] absolute -top-3.75 left-1/2 -translate-x-1/2 "><span className="text-[#BB4D00] text-sm font-medium">Most Popular</span></div>

                    <div>
                        <h1 className="font-bold text-2xl ">Pro</h1>
                        <p className="text-base">Best for professionals</p>
                    </div>

                    <p className="text-xl t"><span className="font-bold text-[40px] ">$29</span>/month</p>

                    <ul className="items-start ">
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium ">Access to all premium tools</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium ">Unlimited templates</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium ">Priority support</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium ">Unlimited projects</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium ">Cloud sync</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium ">Advanced analytics</p>
                        </div>

                    </ul>


                    <button className="btn font-semibold text-white text-base px-4 py-5 rounded-3xl   mt-auto"><span className="bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Start Pro Trial</span></button>

                </div>

                <div className='card-3 p-6 flex flex-col gap-4 bg-[#F9FAFC] rounded-2xl shadow-sm w-full flex-1'>

                    <div>
                        <h1 className="font-bold text-2xl text-[#101727]">Enterprise</h1>
                        <p className="text-base text-[#627382]">For teams and businesses</p>
                    </div>

                    <p className="text-xl text-[#627382]"><span className="font-bold text-[40px] text-[#101727]">$99</span>/month</p>

                    <ul className="items-start">
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium text-[#627382]">Everything in Pro</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium text-[#627382]">Team collaboration</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium text-[#627382]">Custom integrations</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium text-[#627382]">Dedicated support</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium text-[#627382]">SLA guarantee</p>
                        </div>
                        <div className="flex gap-3 items-center ">
                            <FaCheck />
                            <p className="text-base font-medium text-[#627382]">Custom branding</p>
                        </div>

                    </ul>


                    <button className="btn font-semibold text-white text-base px-4 py-5 rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-auto">Contact Sales</button>

                </div>


            </div>

        </div>
    );
};

export default Pricing;