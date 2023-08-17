function VaccinationHighlights({ highlights }) {
    const highlightData = highlights?.data?.data[highlights?.data?.data.length - 1];
    const secondDoseRatio = (Math.round(highlights?.data?.secondRatio * 100) / 100).toFixed(2);

    return (
        <>
            {highlightData && (
                <div className="mt-[20px] bg-white shadow-md rounded-2xl dark:bg-dark-blue">
                    <div className="grid grid-cols-1 text-center border-b sm:grid-cols-3">
                        <div className="py-5">
                            <span className="text-[15px] md:text-[17px] font-semibold text-[#1b1053] dark:text-white">
                                Tổng số người đã tiêm
                            </span>
                            <div className="font-semibold text-[25px] dark:text-blue">
                                {highlightData['1Dose'].toLocaleString('it-IT')}
                            </div>
                        </div>
                        <div className="py-5 sm:border-l sm:border-r">
                            <span className="text-[15px] md:text-[17px] font-semibold text-[#1b1053] dark:text-white">
                                Đã tiêm 2 mũi
                            </span>
                            <div className="font-semibold text-[25px] text-green">
                                {highlightData['2Dose'].toLocaleString('it-IT')}
                            </div>
                        </div>
                        <div className="py-5">
                            <span className="text-[15px] md:text-[17px] font-semibold text-[#1b1053] dark:text-white">
                                Đã tiêm tăng cường
                            </span>
                            <div className="font-semibold text-[25px] text-[#817C98]">
                                {highlightData.totalBooster.toLocaleString('it-IT')}
                            </div>
                        </div>
                    </div>
                    <div className="px-3 py-3 sm:px-9">
                        <div className="mb-3">
                            <div className="inline-block px-3 rounded-full bg-cyan-200">
                                <span className="text-[13px] font-bold text-cyan-500 tracking-wide">
                                    % dân số đã tiêm mũi 2
                                </span>
                            </div>
                        </div>
                        <div className="w-full rounded-full h-7 bg-emerald-50">
                            <div
                                style={{ width: `${secondDoseRatio}%` }}
                                className="bg-cyan-200 h-full rounded-full flex justify-center items-center text-[14px] font-bold text-cyan-500"
                            >
                                {secondDoseRatio}%
                            </div>
                        </div>
                        <div className="mt-2 text-[12px] dark:text-white">
                            Mục tiêu: 70% dân số (tương đương khoảng 150 triệu liều vaccine)
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default VaccinationHighlights;
