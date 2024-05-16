import { Image, StyleSheet, View } from 'react-native';
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Movie = (movie) => {
    
    // console.warn(movie)
    return (

        <View style={styles.card}>
    {/* <IconButton sx={{backgroundColor:"#45474B",opacity:"0.9",borderRadius:"20px",position:"absolute",margin:"10px"}} onClick={AddToFavorite}>
            {flag ==false?<FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                    :<FavoriteOutlinedIcon sx={{color:"error.dark"}}></FavoriteOutlinedIcon>
            }
            </IconButton> */}
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

