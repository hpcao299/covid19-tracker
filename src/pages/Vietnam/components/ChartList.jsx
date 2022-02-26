import Chart from '../../../components/Chart';

function ChartList({ casesPerDay, totalCases }) {
    return (
        <div className="grid grid-cols-1 gap-5 mt-10 xl:grid-cols-2">
            <Chart data={totalCases} title="Tổng số ca tại Việt Nam" type="area" />
            <Chart data={casesPerDay} title="Số ca theo ngày tại Việt Nam" />
        </div>
    );
}

export default ChartList;
