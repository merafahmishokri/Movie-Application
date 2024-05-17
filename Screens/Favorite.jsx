import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Favorite from '../Components/Favorite/Favorite';

const Favorites = () => {
    const favorites=useSelector(state=>state.favorites.favorites)
    console.log(favorites.length)
    if(!favorites) return <Text>Not found</Text>
    return (
        <View>
            {favorites.map((m)=><Favorite key={m.id} {...m}></Favorite>)}
        </View>
    );
}

const styles = StyleSheet.create({})

export default Favorites;
