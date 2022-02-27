import clsx from 'clsx';
import { useState } from 'react';

function TableList(props) {
    const {
        data,
        title,
        centerTitle,
        isProvinceVaccination,
        isProvinceCases,
        column1 = 'STT',
        column2 = 'Tỉnh',
        column3,
        column4,
    } = props;
    const [isLoadMore, setIsLoadMore] = useState(false);
    const filteredData = isLoadMore ? data : data.slice(0, 10);

    return (
        <div className="p-2 mt-8 bg-white shadow-md dark:bg-dark-blue rounded-2xl">
            <div className="p-2 rounded-lg bg-sky-100 sm:p-3">
                <p
                    className={clsx('text-cyan-800 text-[13px] sm:text-[15px] font-semibold', {
                        'text-center': centerTitle,
                    })}
                >
                    {title}
                </p>
            </div>
            <div className="md:p-6 sm:p-[10px]">
                {data.length > 0 ? (
                    <table className="w-full mt-4 mb-1 text-gray-600 sm:my-0">
                        <thead className="mb-4 sm:mb-0">
                            <tr className="font-semibold">
                                <th className="text-center sm:text-left text-[13px] sm:text-[15px]">
                                    {column1}
                                </th>
                                <th className="text-center sm:text-left text-[13px] sm:text-[15px]">
                                    {column2}
                                </th>
                                <th className="text-right text-[13px] sm:text-[15px]">{column3}</th>
                                <th className="text-right text-[13px] sm:text-[15px]">{column4}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((child, index) => (
                                <tr key={index}>
                                    <th className="py-1 font-medium text-center text-[13px] sm:text-[15px] sm:text-left text-gray-800 dark:text-slate-400">
                                        {index + 1}
                                    </th>
                                    <th className="py-1 font-medium text-center text-[13px] sm:text-[15px] sm:text-left text-gray-800 dark:text-slate-400">
                                        {isProvinceCases && child.x}
                                        {isProvinceVaccination && child.provinceName}
                                    </th>
                                    <th className="py-1 font-medium text-center text-[13px] sm:text-[15px] sm:text-right text-sky-500">
                                        +{isProvinceCases && child.y.toLocaleString('it-IT')}
                                        {isProvinceVaccination &&
                                            child.totalVaccineAllocatedReality.toLocaleString(
                                                'it-IT'
                                            )}
                                    </th>
                                    <th className="py-1 font-medium text-right text-[13px] sm:text-[15px] dark:text-gray-300">
                                        {isProvinceCases && child.z.toLocaleString('it-IT')}
                                        {isProvinceVaccination &&
                                            child.totalInjected.toLocaleString('it-IT')}
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center">Loading...</div>
                )}
            </div>
            <button
                onClick={() => setIsLoadMore(!isLoadMore)}
                className="w-full p-2 mt-2 font-semibold rounded-lg sm:p-3 bg-sky-100 text-cyan-800"
            >
                {isLoadMore ? 'Thu gọn' : 'Xem thêm'}
            </button>
        </div>
    );
}

export default TableList;
