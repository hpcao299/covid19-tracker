import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://gw.vnexpress.net';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getCoronaNews: builder.query({
            query: () =>
                '/ar/get_rule_2?category_id=1005226,1005227&limit=3&page=1&data_select=article_id,article_type,title,share_url,thumbnail_url,publish_time,lead,privacy,original_cate,article_category&exclude_id=4428148,4427958,4427410,4426518,4426084,4425733,4425680,4425188,4424669,4424653,4421365,4424206,4424240,4424073,4421463,4420100,4421994,4422105,4421185,4421430&thumb_size=300x180,120x72&thumb_quality=100&thumb_dpr=1,2&thumb_fit=crop',
        }),
    }),
});

export const { useGetCoronaNewsQuery } = newsApi;
