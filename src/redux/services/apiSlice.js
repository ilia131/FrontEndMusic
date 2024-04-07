import {  createApi ,  fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { setAuth , logout } from '../features/authSlice'
import { Mutex } from 'async-mutex'
// import {useDispatch, useSelector} from 'react-redux'
// create a new mutex
const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
     baseUrl: `http://127.0.0.1:8000/api/`,
     credentials: 'include',
})
const baseQueryWithReauth = async (args, api, extraOptions) => {
  //  const dispatch = useDispatch()
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshResult = await baseQuery(
          {
            url: '/jwt/refresh/',
            method: 'POST'
          },
         
          api,
          extraOptions
        )
        if (refreshResult.data) {
          
          api.dispatch(setAuth())
          // retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(logout())
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

//API SLICE

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({
      retrieveUser: builder.query({
      query: () => '/userME/'
   }),
   googleAuthenticate: builder.mutation({
     query : ({ state, code }) => ({
      url : `/o/google-oauth2/?state=${encodeURIComponent(state)}&code=${encodeURIComponent(code)}`,
      method: 'POST',
      headers :{
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
     })
   }),




  postComment: builder.mutation({  
   

     query: ({formData , unique_id}) => ({
        url:`/userMe6/?query=${unique_id}`,
        method: 'POST',
        body: formData
     })
     

  }),
  postView: builder.mutation({  
   

    query: ({formData , unique_id}) => ({
       url:`/vie4/?query=${unique_id}`,
       method: 'POST',
       body: formData
    }) 
    

 }),
 postLike: builder.mutation({  
   

  query: ({formData , unique_id}) => ({
     url:`/like/?query=${unique_id}`,
     method: 'POST',
     body: formData
  }) 
  

}),
  getUnlike: builder.mutation({
    query: ({formData , unique_id , artistname}) => ({
     url:`likeuser/?artistname=${artistname}&unique_id=${unique_id}`,
     method: 'DELETE',
     body: formData
    })

}),

getUnFollow: builder.mutation({
  query: ({ authorfollow1, artistname}) => ({
   url:`followuser/?artistname=${authorfollow1}&authorfollow1=${artistname}`,
   method: 'DELETE',
   
  })

}),

getCheckFollow: builder.query({
  query: ({authorfollow1 , artistname}) => `followuser/?artistname=${authorfollow1}&authorfollow1=${artistname}`,
}),


getlikeS: builder.mutation({
  query: ({formData , unique_id , artistname}) => ({
   url:`likeuser/?artistname=${artistname}&unique_id=${unique_id}`,
   method: 'POST',
   body: formData
  })

}),
getfollow: builder.mutation({
   query: ({formData, artistname}) => ({
     url : `follow/?query=${artistname}`,
     method:'POST',
     body: formData,

   })
}),


getallFollowing: builder.query({
  query: ({artistname}) => `follower/?query=${artistname}`,

}),





getallFollow: builder.query({
  query: ({artistname}) => `follow/?query=${artistname}`,

}),



getCheckLike: builder.query({
  query: ({unique_id ,artistname}) => `likeuser/?artistname=${artistname}&unique_id=${unique_id}`,

}),

  getDelete: builder.mutation({
    query: ({formData , idss}) => ({
      url:`generics/${idss}`,
      method: 'DELETE',
      body: formData
   })

  }),
  getPostuser: builder.query({
      query: () => '/userME1/'
  }),
  getView: builder.query({ 
    query: (unique_id) => 
    `/vie4?query=${unique_id}`
  }),
  getLike: builder.query({ 
    query: (unique_id) => 
    `/like?query=${unique_id}`
  }),
  getUUIdd : builder.query({ 
    query: (unique_id) => 
    `/userMe6?query=${unique_id}`
  }),

  patchUser : builder.mutation({
    query: (formData) => ({
        url: '/userME/',
        method: 'PUT',
        body: formData,
      
    }),
  }),
  comment : builder.mutation({
     query:(formData) => ({
        url: '/userME3/',
        method: 'POST',
        body: formData,
     })
  }),
  post : builder.mutation({
      query: (formData) => ({
          url: '/userME1/',
          method: 'POST',
          body: formData,
        
      }),
  }),
  login : builder.mutation({
      query: ({ email , password}) => ({
          url: '/jwt/create/',
          method: 'POST',
          body: { email , password}
      }),
  }),
  register: builder.mutation({
      query: ({ 
           first_name, 
           artistname , 
           email , 
           password , 
           re_password
          }) => ({
            url: '/users/',
            method: 'POST',
            body: { first_name, artistname, email , password , re_password}
      }),
  }),
  verify : builder.mutation({
      query: () => ({
          url: '/jwt/verify/',
          method: 'POST',
      }),
  }),
  logout : builder.mutation({
      query: () => ({
          url: '/logout/',
          method: 'POST',
      }),
  }),
  activation : builder.mutation({
      query: ({uid, token}) => ({
          url: '/users/activation/',
          method: 'POST',
          body:{uid, token},
      }),
  }),
  resetPassword: builder.mutation({
      query: (email) => ({
          url: '/users/reset_password/',
          method: 'POST',
          body:{email},
      }),
  }),
  resetPasswordConfrim: builder.mutation({
      query: (formData) => ({
          url: '/users/reset_password_confirm/',
          method: 'POST',
          body:formData,
      }),
    }),
  }),
});



export const { 
  useRetrieveUserQuery, 
  useLoginMutation ,
  useRegisterMutation,
  useVerifyMutation,
  useLogoutMutation,
  useActivationMutation,
  useResetPasswordMutation,
  useResetPasswordConfrimMutation,
  usePostMutation,
  useGetPostuserQuery,
  usePatchUserMutation,
  useCommentMutation,
  useGetUUIddQuery,
  usePostCommentMutation,
  useGetDeleteMutation,
  useGetViewQuery,
  usePostViewMutation,
  usePostLikeMutation,
  useGetUnlikeMutation,
  useGetLikeQuery,
  useGetCheckLikeQuery,
  useGetlikeSMutation,
  useGetfollowMutation,
  useGetallFollowQuery,
  useGetUnFollowMutation,
  useGetCheckFollowQuery,
  useGetallFollowingQuery,
  useGoogleAuthenticateMutation,
} =  apiSlice