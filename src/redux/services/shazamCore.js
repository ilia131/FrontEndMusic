import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import axios from "axios";

const options = {method: 'GET', url: 'http://127.0.0.1:8000'};


axios.request(options).then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.error(error);
});

export const shazamCoreApi =  createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000',
    }),
    endpoints: (builder) => ({
      
        getTopCharts: builder.query({ query: () => '/songt'}),

        // getArtist: builder.query({query: ()=>`/api/profile?query=${id}`}),

        post : builder.mutation({
          query:({ image , title ,description , tracks}) => ({
           url:'api/userME1/',
           method: 'POST',
           body: {image ,title , description , tracks}
         })
       }),
       
        

        getTop2: builder.query({ query: () => '' }),

        getAdminSong: builder.query({ query: () => '/songs' }),

        getVideo :builder.query({ query: () => '/video'}),

        getAllLike: builder.query({ query: () => '/alllike' }),
 
        getArtistDetails2: builder.query({ query: () => `/artist`}),

        getSongbyCategory0 : builder.query({ query : () => `/slug?query=r2`}),

        getSongbyCategory : builder.query({ query : () => `/slug?query=rt`}),

        getSongbyCategory2 : builder.query({ query : () => `/slug?query=sd`}),

        getSongbyCategory3 : builder.query({ query : () => `/slug?query=ty`}),


        getSongDetails: builder.query({ query: ({ songid }) => `/songskey/?query=${songid}`}),

        getSongkeys: builder.query({ query: ({songid}) => `/songsket/?query=${songid}`}),
        
        getSongRelated: builder.query({ query: ({songid}) => `/songskey/?query=${songid}` }),

        getArtistDetails: builder.query({ query: ({artistslug}) => `/artistid/?query=${artistslug}`}),

        getSongArtistDetails: builder.query({ query: ({artistId}) => `/songartist/?query=${artistId}`}),




        getProfileView: builder.query({ query: (artistname) => `/artistname?query=${artistname}`}),
        
    
        getSongsByTitle: builder.query({ query : ({songid}) =>`/title/?query=${songid}`}),

        getSongsBySearch: builder.query({ query : (searchTerm) =>`/search?query=${searchTerm}`}),
    })
});


export const {
    useGetSongDetailsQuery,
    useGetTopChartsQuery,
    useGetTop2Query,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsBySearchQuery,
    useGetSongbyCategoryQuery,
    useGetSongsByTitleQuery,
    useGetSongbyCategory2Query,
    useGetSongkeysQuery,
    useGetArtistDetails2Query,
    useGetSongArtistDetailsQuery,
    useGetSongbyCategory3Query,
    useGetSongbyCategory0Query,
    usePostMutation,
    useGetProfileViewQuery,
    useGetAllLikeQuery,
    useGetVideoQuery,
    useGetAdminSongQuery
} = shazamCoreApi