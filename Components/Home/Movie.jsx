import { Image, StyleSheet, View } from 'react-native';
import * as React from 'react';
import { Avatar, Text } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import {addToFavorite,removeFromFavorite} from '../../Redux/slices/favoriteSlice'
const Movie = (movie) => {
    
    const {poster_path,title,release_date,vote_average,id,original_language,overview}=movie;
    const favorites=useSelector(state=>state.favorites.favorites)
    const [flag,setFlage]=React.useState(false)
    const dispatch=useDispatch()
    const AddToFavorites=()=>{
        if(flag==false){
            setFlage(true)
             dispatch( addToFavorite({
                id:id,
                original_language: original_language,
                overview: overview,
                poster_path: poster_path,
                release_date: release_date,
                title: title,
                vote_average: vote_average
              }))
        }else
        {
            console.log(favorites)
            setFlage(false)
            dispatch(removeFromFavorite(movie.id))
        }
    }
    return (

        <View style={styles.card}>
            <MaterialIcons name="favorite" size={24} color={flag==true?"red":"white"} onPress={AddToFavorites}/>
            {/* <Rating name="half-rating-read" value={vote_average/2} precision={0.1} readOnly sx={{backgroundColor:"#45474B",opacity:"0.9",borderRadius:"20px",position:"absolute",margin:"10px",marginLeft:"10%"}} /> */}
            <Image source={{uri:"https://image.tmdb.org/t/p/w500/"+movie.poster_path}} style={styles.img} alt="movie"></Image>
            <View style={{margin:20}}>
            <View><Text style={{color:"white",fontWeight:"bold"}}>{movie.title} ({(movie.release_date+"").split("-")[0]})</Text></View>
            </View>
  </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width:"90%",
        color:"white",
        fontSize:15,
        margin:20,
        backgroundColor:"black",
        borderRadius:20
    },
    img:{
        width:"100%",
        height:300,
        borderRadius:20,
        justifyContent:"center",
        
    }
})

export default Movie;

