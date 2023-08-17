import TableList from '../../components/TableList';
import {
    useGetChartProvinceQuery,
    useGetChartQuery,
    useGetVaccinationProvinceQuery,
    useGetVaccinationQuery,
} from '../../services/trackerApi';
import CasesHighlights from './components/CasesHighlights';
import ChartList from './components/ChartList';
import VaccinationHighlights from './components/VaccinationHighlights';

function VietnamPage() {
    const { data: trackerData, isFetching } = useGetChartQuery();
    const { data: provinceCasesData } = useGetChartProvinceQuery();
    const { data: vaccinationHighlights } = useGetVaccinationQuery();
    const { data: provinceVaccinationData } = useGetVaccinationProvinceQuery();
    const lastUpdated = trackerData?.data?.vnSeason4CommunityDaily?.lastUpdated;
    const provinceCases = provinceCasesData?.data?.cases || [];
    const provinceVaccination = provinceVaccinationData?.data || [];
    const casesPerDay = trackerData?.data?.vnSeason4Daily?.cases;
    const totalCases = trackerData?.data?.vnSeason4?.cases;

    if (isFetching) return null;

    return (
        <div className="px-4 pt-8 mx-auto mt-4 md:px-8">
            <div className="text-[15px] text-center">
                <h2 className="text-[22px] sm:text-[30px] font-bold">
                    Số liệu COVID-19 tại Việt Nam
                </h2>
                <span>
                    (Cập nhật ngày: {new Date(lastUpdated * 1000).toLocaleDateString('en-GB')})
                </span>
            </div>
            <CasesHighlights highlights={trackerData} />
            <ChartList casesPerDay={casesPerDay} totalCases={totalCases} />
            <TableList
                title="Tình hình COVID-19 tại các tỉnh thành Việt Nam"
                data={provinceCases}
                isProvinceCases
                column3="Hôm nay"
                column4="Tổng"
            />
            <VaccinationHighlights highlights={vaccinationHighlights} />
            <TableList
                title="Phân bổ vaccine"
                centerTitle
                data={provinceVaccination}
                isProvinceVaccination
                column3="Phân bổ thực tế"
                column4="Số liều đã tiêm"
            />
        </div>
    );
}

export default VietnamPage;
