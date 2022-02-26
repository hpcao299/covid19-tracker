import { configureStore } from '@reduxjs/toolkit';
import { globalTrackerApi } from '../services/globalTrackerApi';
import { newsApi } from '../services/newsApi';
import { trackerApi } from '../services/trackerApi';

const store = configureStore({
    reducer: {
        [trackerApi.reducerPath]: trackerApi.reducer,
        [globalTrackerApi.reducerPath]: globalTrackerApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
});

export default store;
