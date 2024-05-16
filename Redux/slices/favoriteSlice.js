import {createSlice } from "@reduxjs/toolkit";

const favoritesSlice=createSlice({
    name:"favorites",
    initialState:{favorites:[]},
    reducers:{
        addToFavorite: (state, action)=>{
            state.favorites.push(action.payload);
        },
        removeFromFavorite: (state, action)=>{
            // const idx = state.favorites.findIndex(f => f.id === action.payload)
            // state.favorites.splice(idx, 1);
            state.favorites.filter(m=>m.id==action.payload)
        }
        
        
    }
})

export default  favoritesSlice.reducer;
export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions;