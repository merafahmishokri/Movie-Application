import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Movie from './Movie';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllMovies } from '../../Redux/slices/movieSlice';

const Movies = () => {
    const movies=useSelector(state=>state.movies.movies)
    const dispatch=useDispatch()
    // console.warn(movies)
    useEffect(()=>{
    dispatch(GetAllMovies())

    },[])
    return (
        <ScrollView>
            {movies.map(m=><Movie key={m.id} {...m}></Movie>)}
        </ScrollView> 
        
    );
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        
        justifyContent:"center"
    }
})

export default Movies;
