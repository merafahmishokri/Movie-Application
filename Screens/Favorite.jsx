import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Favorite from '../Components/Favorite/Favorite';
import EmptyFavorite from '../Components/Favorite/EmptyFavorite';
import { Text } from 'react-native';

const Favorites = () => {
    const favorites = useSelector(state => state.favorites.favorites)
    if (favorites.length == 0) return <EmptyFavorite></EmptyFavorite>
    return (
        <ScrollView style={styles.con}>
            <Text style={styles.txt}>Your Favorites</Text>
            {favorites.map((m) => <Favorite key={m.id} {...m}></Favorite>)}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    con: {
        backgroundColor: "#2D2727"
    },
    txt: {
        color: "white",
        fontSize: 40,
        marginTop: 35,
        marginLeft: 20
    }
})

export default Favorites;
