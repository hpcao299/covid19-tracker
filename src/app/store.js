import { configureStore } from '@reduxjs/toolkit';
import { globalTrackerApi } from '../services/globalTrackerApi';
import { trackerApi } from '../services/trackerApi';

const store = configureStore({
    reducer: {
        [trackerApi.reducerPath]: trackerApi.reducer,
        [globalTrackerApi.reducerPath]: globalTrackerApi.reducer,
    },
});

export default store;
