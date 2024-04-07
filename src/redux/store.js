import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from './services/shazamCore';
import playerReducer from './features/playerSlice';
import { apiSlice } from './services/apiSlice';
// import {authApiSlice} from './features/authApiSlice'
import authReducer from "./features/authSlice";
// import dushslice from './features/dushSlice'
// import { dashSlice } from './services/dashslice';
export const configureCombinedStore = () => {
   
    const combinedReducer = {
        [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
        player: playerReducer,
        [apiSlice.reducerPath]:  apiSlice.reducer,
        auth: authReducer,
        // [dashSlice.reducerPath]:dashSlice.reducer,
        // authdush:dushslice,
    };

    const combinedMiddleware = (getDefaultMiddleware) => {
        const shazamCoreApiMiddleware = shazamCoreApi.middleware;
        const apiSliceMiddleware = apiSlice.middleware;
        // const dashSliceMiddlware = dashSlice.middleware
        return getDefaultMiddleware()
            .concat(shazamCoreApiMiddleware)
            .concat(apiSliceMiddleware)
            // .concat(dashSliceMiddlware);
    };

    return configureStore({
        reducer: combinedReducer,
        middleware: combinedMiddleware,
        devTools: process.env.NODE_ENV !== 'production'
    });
};

export const store = configureCombinedStore();
