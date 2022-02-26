import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeProvider';

function Header() {
    const { pathname } = useLocation();
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <header className="sticky top-0 z-50 w-full h-16 bg-gray-50 dark:bg-dark">
            <div className="flex items-center h-full px-3 shadow-md md:px-8 dark:border-b dark:border-gray-600 dark:text-white">
                <div className="flex items-center w-4/5 md:w-1/4">
                    <i className="bx bxs-virus text-blue-icon text-[40px] mr-2"></i>
                    <span className="text-base font-bold cursor-default">Covid-19 Tracker</span>
                </div>
                <div className="hidden md:block md:flex-1">
                    <ul className="text-slate-500 font-medium dark:text-slate-400 text-[15px] items-center justify-center flex">
                        <li className="ml-10">
                            <Link
                                className={clsx(
                                    'hover:text-black dark:hover:text-white transition-colors',
                                    { 'text-black dark:text-white': pathname === '/world' }
                                )}
                                to="/world"
                            >
                                Thế Giới
                            </Link>
                        </li>
                        <li className="ml-10">
                            <Link
                                className={clsx(
                                    'hover:text-black dark:hover:text-white transition-colors',
                                    { 'text-black dark:text-white': pathname === '/vietnam' }
                                )}
                                to="/vietnam"
                            >
                                Việt Nam
                            </Link>
                        </li>
                        <li className="ml-10">
                            <Link
                                className={clsx(
                                    'hover:text-black dark:hover:text-white transition-colors',
                                    { 'text-black dark:text-white': pathname === '/news' }
                                )}
                                to="/news"
                            >
                                Tin Tức
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/5 text-right md:w-1/4">
                    <button className="text-[25px] p-1 pr-0" onClick={() => setDarkMode(!darkMode)}>
                        <i
                            className={clsx({
                                'bx bxs-sun text-yellow-400': !darkMode,
                                'bx bxs-moon text-[#0ea5e9]': darkMode,
                            })}
                        ></i>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
