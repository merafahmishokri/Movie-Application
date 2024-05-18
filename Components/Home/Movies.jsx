import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Movie from './Movie';
import { useDispatch, useSelector } from 'react-redux';
import { GetNowPlayingMovies, GetPopulargMovies, GetTopRatedMovies, GetUpcomingMovies, setMovies } from '../../Redux/slices/movieSlice';
import { FlatList } from 'react-native';


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
        <>
            {moviesFlag[0]?<View><Text style={styles.txt}>Search Results</Text><View style={{margin:"auto"}}>{searchMovies.map(m=><Movie key={m.id} {...m} flag={true}></Movie>)}</View></View>:<></>}
            {moviesFlag[1]?<View><Text style={styles.txt}>Now Playing</Text><FlatList
                data={NowPlayingmovies}
                renderItem={({item})=><Movie {...item}></Movie>}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
            /></View>:<></>}
            {moviesFlag[2]?<View><Text style={styles.txt}>Popular</Text><FlatList
                data={Popularmovies}
                renderItem={({item})=><Movie {...item}></Movie>}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
            /></View>:<></>}
            {moviesFlag[3]?<View><Text style={styles.txt}>Top Rated</Text><FlatList
                data={TopRatedmovies}
                renderItem={({item})=><Movie {...item}></Movie>}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
            /></View>:<></>}
            {moviesFlag[4]?<View><Text style={styles.txt}>Upcoming</Text><FlatList
                data={Upcomingmovies}
                renderItem={({item})=><Movie {...item}></Movie>}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
            /></View>:<></>}
        </>
        
    );
}

const styles = StyleSheet.create({
    container:{
        
    },
    txt:{
        color:"white",
        fontSize:30,
        marginLeft:20,
        marginTop:20,
    }
})

export default Movies;
