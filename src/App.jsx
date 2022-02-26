import { useRoutes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import routes from './pages/routes';
import './tailwind.css';
import ScrollToTop from './utils/ScrollToTop';

function App() {
    const router = useRoutes(routes);

    return (
        <div className="min-h-screen text-black bg-gray-50 dark:bg-dark dark:text-white font-poppins">
            <Header />
            <ScrollToTop />
            <div className="main">
                <div className="flex">{router}</div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
