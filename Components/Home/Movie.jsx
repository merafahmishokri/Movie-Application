import { Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import * as React from 'react';
import { Avatar, Text } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../Redux/slices/favoriteSlice'
import { Rating, RatingProps } from '@rneui/themed';
import { AirbnbRating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';
const Movie = (movie) => {
    const favorites = useSelector(state => state.favorites.favorites)
    const dispatch = useDispatch()
    const AddToFavorites = () => {
        if (!favorites.includes(movie)) {
            dispatch(addToFavorite(movie))
        } else {
            dispatch(removeFromFavorite(movie.id))
        }
    }
    const navigation = useNavigation();
    const moviePressed=()=>{
        navigation.navigate('Details',{movie})
    }
    return (
        <TouchableWithoutFeedback onPress={moviePressed}>
        <View style={styles.card}>
            <Image source={{ uri: "https://image.tmdb.org/t/p/w500/" + movie.poster_path }} style={styles.img} alt="movie"></Image>
            <MaterialIcons name="favorite" size={24} color={favorites.includes(movie) == true ? "red" : "white"} onPress={AddToFavorites} style={styles.icon} />
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
                size={20}                
                />
                </View>
            <View style={{ margin: 20 }}>
                <View><Text style={{ color: "white", fontWeight: "bold",textAlign:"center" }}>{movie.title} ({(movie.release_date + "").split("-")[0]})</Text></View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 230,
        color: "white",
        fontSize: 15,
        margin: 20,
        backgroundColor:"#2D2727",
        borderRadius: 20,
        height: 400,
        
    },
    img: {
        width: "100%",
        height: 320,
        borderRadius: 20,
        justifyContent: "center",

    },
    icon: {
        position: "absolute",
        paddingLeft: "85%",
        paddingTop: 7
    },
    rating: {
        position: "absolute",
        paddingTop: 7,
        paddingLeft:10
    }
})

export default Movie;

