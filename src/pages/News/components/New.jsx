import moment from 'moment';
import 'moment/locale/vi';

function New({ imageUrl, title, lead, link, publishTime }) {
    return (
        <div className="mt-6">
            <a href={link} rel="noreferrer" target="_blank">
                <img src={imageUrl} alt={title} className="w-full rounded-lg" />
                <div className="text-gray-700 dark:text-gray-200 text-[20px] font-semibold my-2">
                    {title}
                </div>
                <span className="mb-4 font-normal dark:text-gray-200">{lead}</span>
                <div className="flex justify-between text-[12px] text-gray-800 dark:text-gray-300 mt-1">
                    <span>Theo VnExpress</span>
                    <span>
                        {moment(publishTime * 1000)
                            .locale('vi')
                            .startOf('ss')
                            .fromNow()}
                    </span>
                </div>
            </a>
        </div>
    );
}

export default New;
