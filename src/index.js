import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import DarkModeProvider from './contexts/DarkModeProvider';

ReactDOM.render(
    <Router>
        <DarkModeProvider>
            <App />
        </DarkModeProvider>
    </Router>,
    document.getElementById('root')
);
