import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetNowPlayingMovies=createAsyncThunk("movies/getAllNowPlaying",async()=>{
    const data=await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=00f378e7895b0d9b5b8653e265d683e1")
    return data.data.results
    
})
export const GetPopulargMovies=createAsyncThunk("movies/getAllPopular",async()=>{
    const data=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=00f378e7895b0d9b5b8653e265d683e1")
    return data.data.results
    
})
export const GetTopRatedMovies=createAsyncThunk("movies/getAllTopRated",async()=>{
    const data=await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=00f378e7895b0d9b5b8653e265d683e1")
    return data.data.results
    
})
export const GetUpcomingMovies=createAsyncThunk("movies/getAllUpcoming",async()=>{
    const data=await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=00f378e7895b0d9b5b8653e265d683e1")

    return data.data.results
    
})
const moviesSlice=createSlice({
    name:"movies",
    initialState:{moviesFlag:[],NowPlaying:[],Popular:[],TopRated:[],Upcoming:[],movies:[]},
    reducers:{
        setMovies: (state, action)=>{
            state.moviesFlag=action.payload;
        },
        searchMovies: (state, action)=>{
            state.movies=action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(GetNowPlayingMovies.fulfilled,(state,action)=>{
            state.NowPlaying=action.payload
        }),
        builder.addCase(GetTopRatedMovies.fulfilled,(state,action)=>{
            state.Popular=action.payload
        }),
        builder.addCase(GetPopulargMovies.fulfilled,(state,action)=>{
            state.TopRated=action.payload
        }),
        builder.addCase(GetUpcomingMovies.fulfilled,(state,action)=>{
            state.Upcoming=action.payload
        })
       
    }
})

export default  moviesSlice.reducer;
export const { setMovies,searchMovies } = moviesSlice.actions;