import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './app/store';
import DarkModeProvider from './contexts/DarkModeProvider';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <DarkModeProvider>
                <App />
            </DarkModeProvider>
        </Provider>
    </Router>,
    document.getElementById('root')
);
