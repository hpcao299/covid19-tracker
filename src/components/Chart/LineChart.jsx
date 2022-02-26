import {
    Area,
    CartesianGrid,
    ComposedChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const nFormatter = (num, digits) => {
    const nb = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'k' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'G' },
        { value: 1e12, symbol: 'T' },
        { value: 1e15, symbol: 'P' },
        { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = nb.length - 1; i > 0; i--) {
        if (num >= nb[i].value) {
            break;
        }
    }
    return nb[i] ? (num / nb[i].value).toFixed(digits).replace(rx, '$1') + nb[i].symbol : '0';
};

function LineChart({ data, type }) {
    return (
        <div className="w-full dark:text-black">
            <ResponsiveContainer width={'99%'} aspect={1.3}>
                <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 25 }}>
                    <CartesianGrid vertical={false} />
                    <defs>
                        <linearGradient id="colorUv" x1="0.2" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#45c3f8" stopOpacity={0.9} />
                            <stop offset="100%" stopColor="#9de2fe" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="x" minTickGap={25} />
                    <YAxis
                        tickFormatter={tick => {
                            return nFormatter(tick, 1);
                        }}
                        domain={[0, 'auto']}
                        allowDataOverflow={true}
                    />

                    <Tooltip
                        labelFormatter={e => 'Ngày: ' + e}
                        wrapperStyle={{
                            fontSize: '0.85rem',
                            textAlign: 'center',
                        }}
                        formatter={e => {
                            return e.toLocaleString('it-IT');
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="y"
                        name="Ca nhiễm"
                        stroke="#16a34a"
                        fill="url(#colorUv)"
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineChart;
