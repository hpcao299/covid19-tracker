import { useRoutes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import routes from './pages/routes';
import './tailwind.css';

function App() {
    const router = useRoutes(routes);

    return (
        <div className="min-h-screen text-black bg-gray-50 dark:bg-dark dark:text-white font-poppins">
            <Header />
            <div className="main">
                <div className="flex">
                    <div className="px-3 pt-8 mt-4 sm:mx-auto md:px-8">{router}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
