import HighlightCard from '../../components/HighlightCard';
import { useGetGlobalTrackerQuery } from '../../services/globalTrackerApi';

function WorldPage() {
    const { data, isFetching } = useGetGlobalTrackerQuery();

    if (isFetching) return <div>Loading...</div>;
    console.log(data);
    return (
        <>
            <div className="text-[15px] text-center">
                <h2 className="sm:text-[30px] font-bold">Số liệu COVID-19 Thế Giới</h2>
                <span>(Cập nhật ngày: {new Date().toLocaleDateString('en-GB')})</span>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-6 xl:grid-cols-4 sm:grid-cols-2">
                <HighlightCard type="community" title="Dân số thế giới" data={data?.population} />
                <HighlightCard
                    type="infected"
                    title="Ca nhiễm"
                    data={data?.cases}
                    description={data?.todayCases}
                />
                <HighlightCard
                    type="recovered"
                    title="Hồi phục"
                    data={data?.recovered}
                    description={data?.todayRecovered}
                />
                <HighlightCard
                    type="dead"
                    title="Tử vong"
                    data={data?.deaths}
                    description={data?.todayDeaths}
                />
            </div>
        </>
    );
}

export default WorldPage;
