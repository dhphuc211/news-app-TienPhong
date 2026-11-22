import { configureStore } from "@reduxjs/toolkit";
import newsReducer from '../reducers/NewsSlice.ts'

export const store = configureStore({
    reducer: {
        news: newsReducer
    }
})