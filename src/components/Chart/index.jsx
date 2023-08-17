import { useEffect, useState } from 'react';
import { formatShortDate } from '../../utils/DataFormatter';
import Buttons from './Buttons';
import LineChart from './LineChart';

function Chart({ title, data, type }) {
    const [range, setRange] = useState('all');
    const [chartData, setChartData] = useState(data);

    useEffect(() => {
        let filteredData;
        if (range === 'all') {
            filteredData = data;
        } else if (range === 'month') {
            filteredData = data.slice(data.length - 31, data.length);
        } else if (range === 'week') {
            filteredData = data.slice(data.length - 7, data.length);
        }

        const formattedData = filteredData.map(child => ({
            x: formatShortDate(child.x),
            y: child.y,
        }));

        setChartData(formattedData);
    }, [range, data]);

    return (
        <>
            <div className="w-full bg-white shadow-md dark:bg-dark-blue rounded-2xl">
                <div className="p-5 text-lg font-semibold text-center text-black md:text-xl dark:text-white">
                    {title}
                </div>
                <LineChart data={chartData} type={type} />
                <Buttons setRange={setRange} />
            </div>
        </>
    );
}

export default Chart;
