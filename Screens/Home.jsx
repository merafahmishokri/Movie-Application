import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Movies from '../Components/Home/Movies';
import Search from '../Components/Home/Search';

const Home = () => {
    return (
        <View>
            <Search></Search>
            <Movies></Movies>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
