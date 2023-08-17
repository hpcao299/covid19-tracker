function Buttons({ setRange }) {
    return (
        <div className="grid grid-cols-3 gap-3 p-3 sm:p-4">
            <button
                onClick={() => setRange('week')}
                className="bg-white dark:bg-[#263142] w-full px-3 py-2 sm:py-1 border-2 border-inherit dark:border-[#0f172a] rounded-full text-sm dark:text-[#bbb5b5] hover:scale-105 transition-transform"
            >
                Tuần
            </button>
            <button
                onClick={() => setRange('month')}
                className="bg-white dark:bg-[#263142] w-full px-3 py-2 sm:py-1 border-2 border-inherit dark:border-[#0f172a] rounded-full text-sm dark:text-[#bbb5b5] hover:scale-105 transition-transform"
            >
                Tháng
            </button>
            <button
                onClick={() => setRange('all')}
                className="bg-white dark:bg-[#263142] w-full px-3 py-2 sm:py-1 border-2 border-inherit dark:border-[#0f172a] rounded-full text-sm dark:text-[#bbb5b5] hover:scale-105 transition-transform"
            >
                Tất cả
            </button>
        </div>
    );
}

export default Buttons;
