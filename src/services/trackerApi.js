import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.zingnews.vn/public/v2/corona';

export const trackerApi = createApi({
    reducerPath: 'trackerApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getChart: builder.query({
            query: () => '/getChart',
        }),
        getChartProvince: builder.query({
            query: () => '/getChart?type=province',
        }),
        getVaccination: builder.query({
            query: () => '/getChart?type=vaccination_v2',
        }),
        getVaccinationProvince: builder.query({
            query: () => '/getChart?type=vaccination2',
        }),
    }),
});

export const {
    useGetChartQuery,
    useGetChartProvinceQuery,
    useGetVaccinationQuery,
    useGetVaccinationProvinceQuery,
} = trackerApi;
