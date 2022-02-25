import clsx from 'clsx';

function HighlightCard({ title, data, description, type }) {
    return (
        <div className="w-full sm:w-[270px] bg-white px-4 py-4 rounded-[30px] shadow-md dark:bg-[#13283f]">
            <div className="text-[20px] font-bold flex flex-col justify-center items-center text-[#1b1053] dark:text-white">
                <span>{title}</span>
                <span
                    className={clsx('text-[30px] my-4', {
                        'text-[#F9345E]': type === 'infected',
                        'text-[#1CB142]': type === 'recovered',
                        'text-[#817C98]': type === 'dead',
                        'text-[#FA6400]': type === 'community',
                    })}
                >
                    {data.toLocaleString('it-IT')}
                </span>
                {description && (
                    <span className="font-normal">+{description.toLocaleString('it-IT')}</span>
                )}
            </div>
        </div>
    );
}

export default HighlightCard;
