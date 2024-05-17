

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { removeFromFavorite } from '../../Redux/slices/favoriteSlice';


const Favorite = (movie) => {
    const dispatch=useDispatch()
    DeleteFromFavorites=()=>{
        dispatch(removeFromFavorite(movie.id))
    }
    return (
        <View style={styles.con}>
            <Image source={{ uri: "https://image.tmdb.org/t/p/w500/" + movie.poster_path }} style={styles.img} alt="movie"></Image>
            <View style={{ margin: 20 }}>
                <View><Text style={{ color: "white", fontWeight: "bold" }}>{movie.title} ({(movie.release_date + "").split("-")[0]})</Text></View>
                <Button icon="delete" mode="contained" style={styles.btn} onPress={DeleteFromFavorites}>
                    Delete
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    con: {
        width: "90%",
        color: "white",
        fontSize: 15,
        margin: 20,
        backgroundColor: "black",
        borderRadius: 20
    },
    img: {
        width: "100%",
        height: 300,
        borderRadius: 20,
        justifyContent: "center",

    },
    btn:{
        backgroundColor:"beige",
        borderRadius:10
    }
})

export default Favorite;
