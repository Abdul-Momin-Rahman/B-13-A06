

const Stats = () => {
    return (
        <div className="py-5 lg:py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-center">
            <div className="lg:w-10/12 mx-auto flex justify-between">
                <div className="flex flex-col gap-3 w-full items-center">
                    <h1 className="font-extrabold text-3xl lg:text-6xl text-white">50K+</h1>
                    <p className="text-xl lg:text-2xl font-medium text-white opacity-70">Active Users</p>
                </div>
                <div class="divider divider-horizontal w-px bg-white opacity-50"></div>
                <div className="flex flex-col gap-3 w-full items-center">
                    <h1 className="font-extrabold text-3xl lg:text-6xl text-white">200+</h1>
                    <p className="text-xl lg:text-2xl font-medium text-white opacity-70">Premium Tools</p>
                </div>
                <div class="divider divider-horizontal w-px bg-white opacity-50"></div>
                <div className="flex flex-col gap-3 w-full items-center">
                    <h1 className="font-extrabold text-3xl lg:text-6xl text-white">4.9</h1>
                    <p className="text-xl lg:text-2xl font-medium text-white opacity-70">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;