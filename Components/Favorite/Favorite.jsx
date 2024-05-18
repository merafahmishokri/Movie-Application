import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { removeFromFavorite } from '../../Redux/slices/favoriteSlice';
import { AirbnbRating } from '@rneui/themed';


const Favorite = (movie) => {
    const dispatch=useDispatch()
    DeleteFromFavorites=()=>{
        dispatch(removeFromFavorite(movie.id))
    }
    return (
        <View style={styles.con}>
            <Image source={{ uri: "https://image.tmdb.org/t/p/w500/" + movie.poster_path }} style={styles.img} alt="movie"></Image>
            <View style={styles.info}>
                    <Text style={{ color: "white", fontWeight: "bold",fontSize:16 }}>{movie.title}</Text>
                    <Text style={{ color: "white", margin:15}}>{movie.release_date}</Text>
                <View style={styles.rating}>

            <AirbnbRating
              starContainerStyle={{
                  alignSelf: "center",
                  backgroundColor: "#45474B",
                  borderRadius:20
                }}
                isDisabled={true}
                showRating={false}
                defaultRating={movie.vote_average/2}
                size={21}
                />
                <Button icon="delete" mode="contained" style={styles.btn} onPress={DeleteFromFavorites}>
                    Delete
                </Button>
                </View>
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
        borderRadius: 20,
        display:"flex",
        flexDirection:"row",
    },
    img: {
        width: "30%",
        height: 200,
        marginLeft:10,
        marginVertical:10,
        borderRadius:10

    },
    info:{
        margin:20,
        alignItems:"center"
    },
    btn:{
        backgroundColor:"#DFD0B8",
        borderRadius:10,
        width:160,
        margin:20
    }
})

export default Favorite;
