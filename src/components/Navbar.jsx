import { Link, useLocation } from 'react-router-dom';
import NewsIcon from '../assets/images/news-icon.png';
import VietnamIcon from '../assets/images/vietnam-icon.png';
import WorldIcon from '../assets/images/world-icon.png';

function Navbar() {
    const { pathname } = useLocation();

    return (
        <nav className="sticky bottom-0 z-50 w-full bg-white border-t-2 sm:hidden dark:bg-dark border-slate-100">
            <div className="flex items-center justify-between px-8 pt-4 pb-3 text-center text-slate-500 dark:text-slate-400">
                <Link className={pathname === '/world' && 'dark:text-white text-black'} to="/world">
                    <img src={WorldIcon} alt="World Icon" className="w-8 mx-auto" />
                    <p className="mt-1 text-[12px]">Thế Giới</p>
                </Link>
                <Link
                    className={pathname === '/vietnam' && 'dark:text-white text-black'}
                    to="/vietnam"
                >
                    <img src={VietnamIcon} alt="Vietnam Icon" className="w-8 mx-auto" />
                    <p className="mt-1 text-[12px]">Việt Nam</p>
                </Link>
                <Link className={pathname === '/news' && 'dark:text-white text-black'} to="/news">
                    <img src={NewsIcon} alt="News Icon" className="w-8 mx-auto" />
                    <p className="mt-1 text-[12px]">Tin Tức</p>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
