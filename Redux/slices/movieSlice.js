import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAllMovies=createAsyncThunk("movies/getAll",async()=>{
    const data=await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
    return data.data.results
})
export const EditMovie=createAsyncThunk("movies/edit",async({id,movie})=>{
    await axios.put("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7/"+id,movie);
    
})
export const DeletMovie=createAsyncThunk("movies/delete",async(id)=>{
     await axios.delete("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7/"+id);
     
 })
 export const AddMovie=createAsyncThunk("movies/add",async(movie)=>{
    await axios.post("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7",movie);
    
})
const moviesSlice=createSlice({
    name:"movies",
    initialState:{movies:[]},
    extraReducers:(builder)=>{
        builder.addCase(GetAllMovies.fulfilled,(state,action)=>{
            state.movies=action.payload
        })
       
    }
})

export default  moviesSlice.reducer;