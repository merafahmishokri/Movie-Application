import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Favorite from '../Components/Favorite/Favorite';
import EmptyFavorite from '../Components/Favorite/EmptyFavorite';
import { Text } from 'react-native';

const Favorites = () => {
    const favorites=useSelector(state=>state.favorites.favorites)
    console.log(favorites.length)
    if(favorites.length==0) return <EmptyFavorite></EmptyFavorite>
    return (
        <ScrollView >
            <Text>Your Favorites</Text>
            {favorites.map((m)=><Favorite key={m.id} {...m}></Favorite>)}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    con:{
        backgroundColor:"black"
    }
})

export default Favorites;
