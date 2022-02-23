import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeProvider';

function Header() {
    const { pathname } = useLocation();
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <header className="fixed top-0 w-full h-16 z-50">
            <div className="flex items-center px-3 md:px-8 h-full dark:border-b dark:border-gray-600 shadow-md dark:text-white">
                <div className="w-4/5 md:w-1/4 flex items-center">
                    <i className="bx bxs-virus text-blue text-[40px] mr-2"></i>
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
                <div className="w-1/5 md:w-1/4 text-right">
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
