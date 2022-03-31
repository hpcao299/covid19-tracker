import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import routes from './pages/routes';
import './tailwind.css';
import ScrollToTop from './utils/ScrollToTop';

function App() {
    const router = useRoutes(routes);

    useEffect(() => {
        console.log(
            '%cGithub Repo: ' + '%chttps://github.com/HPhucJ2007/covid19-tracker',
            'color: #2AC4A9',
            'color: #5F6367; text-decoration: underline;'
        );
    }, []);

    return (
        <div className="min-h-screen text-black bg-gray-50 dark:bg-dark dark:text-white font-poppins">
            <Header />
            <ScrollToTop />
            <div className="main">
                <div className="flex">{router}</div>
            </div>
            <Footer />
            <Navbar />
        </div>
    );
}

export default App;
