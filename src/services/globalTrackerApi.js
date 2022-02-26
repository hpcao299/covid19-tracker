import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api-kent.netlify.app/.netlify/functions/api';

export const globalTrackerApi = createApi({
    reducerPath: 'globalTrackerApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getGlobalTracker: builder.query({
            query: () => '/global/all',
        }),
    }),
});

export const { useGetGlobalTrackerQuery } = globalTrackerApi;
