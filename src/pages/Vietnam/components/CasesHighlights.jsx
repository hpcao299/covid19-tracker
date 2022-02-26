import HighlightCard from '../../../components/HighlightCard';

function CasesHighlights({ highlights }) {
    const highlightData =
        highlights?.data?.vnSeason4CommunityDaily?.data[
            highlights?.data?.vnSeason4CommunityDaily?.data.length - 1
        ];

    return (
        <>
            {highlightData && (
                <div className="grid grid-cols-1 gap-5 mt-6 xl:grid-cols-4 sm:grid-cols-2">
                    <HighlightCard
                        type="infected"
                        title="Ca nhiễm"
                        data={highlightData.total}
                        description={highlightData.daily}
                    />
                    <HighlightCard
                        type="recovered"
                        title="Hồi phục"
                        data={highlightData['total-recover']}
                        description={highlightData.recover}
                    />
                    <HighlightCard
                        type="dead"
                        title="Tử vong"
                        data={highlightData['total-dead']}
                        description={highlightData.dead}
                    />
                    <HighlightCard
                        type="community"
                        title="Ca cộng đồng"
                        data={highlightData.community}
                    />
                </div>
            )}
        </>
    );
}

export default CasesHighlights;
