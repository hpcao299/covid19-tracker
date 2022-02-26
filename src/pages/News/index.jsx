import { useGetCoronaNewsQuery } from '../../services/newsApi';
import New from './components/New';

function NewsPage() {
    const { data, isFetching } = useGetCoronaNewsQuery();
    const postCoronaNews = data?.data['1005226']?.data;
    const coronaNews = data?.data['1005227']?.data;

    if (isFetching) return <div>Loading...</div>;

    console.log(postCoronaNews);

    return (
        <div className="flex w-full mt-8">
            <div className="px-3 pt-0 pb-5 mx-auto bg-white rounded-lg md:w-1/2 dark:bg-dark-blue">
                {coronaNews.map(detail => (
                    <New
                        key={detail.article_id}
                        title={detail.title}
                        lead={detail.lead}
                        imageUrl={detail.thumbnail_url}
                        link={detail.share_url}
                        publishTime={detail.publish_time}
                    />
                ))}
                {postCoronaNews.map(detail => (
                    <New
                        key={detail.article_id}
                        title={detail.title}
                        lead={detail.lead}
                        imageUrl={detail.thumbnail_url}
                        link={detail.share_url}
                        publishTime={detail.publish_time}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewsPage;
