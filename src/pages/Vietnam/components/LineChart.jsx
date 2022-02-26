function LineChart() {
    return (
        <div className="grid grid-cols-1 gap-5 mt-10 xl:grid-cols-2">
            <div className="w-full bg-white shadow-md dark:bg-dark-blue rounded-2xl">
                <div className="p-5 text-lg font-semibold text-center text-black md:text-xl dark:text-white">
                    Tổng số ca tại Việt Nam
                </div>
                <div className="grid grid-cols-3 gap-3 p-3 sm:p-4">
                    <button className="bg-white dark:bg-[#263142] w-full px-3 sm:py-1 border-2 border-inherit dark:border-[#0f172a] rounded-full text-sm dark:text-[#bbb5b5] hover:scale-105 transition-transform">
                        Tuần
                    </button>
                    <button className="bg-white dark:bg-[#263142] w-full px-3 sm:py-1 border-2 border-inherit dark:border-[#0f172a] rounded-full text-sm dark:text-[#bbb5b5] hover:scale-105 transition-transform">
                        Tháng
                    </button>
                    <button className="bg-white dark:bg-[#263142] w-full px-3 sm:py-1 border-2 border-inherit dark:border-[#0f172a] rounded-full text-sm dark:text-[#bbb5b5] hover:scale-105 transition-transform">
                        Tất cả
                    </button>
                </div>
            </div>
            <div className="w-full bg-white shadow-md dark:bg-dark-blue rounded-2xl">
                <div className="p-5 text-lg font-semibold text-center text-black md:text-xl dark:text-white">
                    Số ca theo ngày tại Việt Nam
                </div>
                <div className="grid grid-cols-3 gap-3 p-3 sm:p-4">
                    <button className="bg-white dark:bg-[#263142] w-full px-3 sm:py-1 border-2 border-inherit dark:border-[#0f172a] rounded-full text-sm dark:text-[#bbb5b5] hover:scale-105 transition-transform">
                        Tuần
                    </button>
                    <button className="bg-white dark:bg-[#263142] w-full px-3 sm:py-1 border-2 border-inherit dark:border-[#0f172a] rounded-full text-sm dark:text-[#bbb5b5] hover:scale-105 transition-transform">
                        Tháng
                    </button>
                    <button className="bg-white dark:bg-[#263142] w-full px-3 sm:py-1 border-2 border-inherit dark:border-[#0f172a] rounded-full text-sm dark:text-[#bbb5b5] hover:scale-105 transition-transform">
                        Tất cả
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LineChart;
