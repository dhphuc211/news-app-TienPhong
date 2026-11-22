
import { createSlice } from "@reduxjs/toolkit";
import type { NewsItem } from "../api/rssService";


const initialState: {
    news: NewsItem[],
    isLoading: boolean
} = {
    news: [],
    isLoading: true
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        loadData: (state, action)=>
        {
            state.news = action.payload
            state.isLoading = false
        }
    }
})

export const {loadData } = newsSlice.actions
export default newsSlice.reducer