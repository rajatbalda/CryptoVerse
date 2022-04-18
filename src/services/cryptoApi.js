import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '83be749cf7msh2677ec0e0bddccfp102691jsn3ffeaa0d11c2'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
});







// const options = {
//     method: 'GET',
//     url: ,
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       tiers: '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       
//     }
// };

