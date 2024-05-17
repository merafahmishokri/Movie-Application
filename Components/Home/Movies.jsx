import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Movie from './Movie';
import { useDispatch, useSelector } from 'react-redux';
import { GetNowPlayingMovies, GetPopulargMovies, GetTopRatedMovies, GetUpcomingMovies, setMovies } from '../../Redux/slices/movieSlice';


const Movies = () => {
    const moviesFlag=useSelector(state=>state.movies.moviesFlag)
    const searchMovies=useSelector(state=>state.movies.movies)
    const NowPlayingmovies=useSelector(state=>state.movies.NowPlaying)
    const Popularmovies=useSelector(state=>state.movies.Popular)
    const TopRatedmovies=useSelector(state=>state.movies.TopRated)
    const Upcomingmovies=useSelector(state=>state.movies.Upcoming)
    const dispatch=useDispatch()
    // console.log(movies)
    useEffect(()=>{
    dispatch(GetNowPlayingMovies())
    dispatch(GetPopulargMovies())
    dispatch(GetTopRatedMovies())
    dispatch(GetUpcomingMovies())
    dispatch(setMovies([false,true,true,true,true]))
    
    },[])
    return (
        <ScrollView style={styles.container}>
            {moviesFlag[0]?<View><Text>search</Text>{searchMovies.map(m=><Movie key={m.id} {...m}></Movie>)}</View>:<></>}
            {moviesFlag[1]?<View><Text>NowPlayingmovies</Text>{NowPlayingmovies.map(m=><Movie key={m.id} {...m}></Movie>)}</View>:<></>}
            {moviesFlag[2]?<View><Text>Popularmovies</Text>{Popularmovies.map(m=><Movie key={m.id} {...m}></Movie>)}</View>:<></>}
            {moviesFlag[3]?<View><Text>TopRatedmovies</Text>{TopRatedmovies.map(m=><Movie key={m.id} {...m}></Movie>)}</View>:<></>}
            {moviesFlag[4]?<View><Text>Upcomingmovies</Text>{Upcomingmovies.map(m=><Movie key={m.id} {...m}></Movie>)}</View>:<></>}
        </ScrollView> 
        
    );
}

const styles = StyleSheet.create({
    container:{
        
    }
})

export default Movies;
