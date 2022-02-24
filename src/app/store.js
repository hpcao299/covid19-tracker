import { configureStore } from '@reduxjs/toolkit';
import { trackerApi } from '../services/trackerApi';

const store = configureStore({
    reducer: {
        [trackerApi.reducerPath]: trackerApi.reducer,
    },
});

export default store;
