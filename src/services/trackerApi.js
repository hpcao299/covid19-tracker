import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseUrl = 'https://api.zingnews.vn/public/v2/corona';

export const trackerApi = createApi({
    reducerPath: 'trackerApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getChart: builder.query({
            query: () => '/getChart',
        }),
    }),
});

export const { useGetChartQuery } = trackerApi;
