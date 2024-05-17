import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Movies from '../Components/Home/Movies';
import Search from '../Components/Home/Search';

const Home = () => {
    return (
        <View style={styles.con}>
            <Search></Search>
            <Movies></Movies>
        </View>
    );
}

const styles = StyleSheet.create({
    con:{
        backgroundColor:"#45474B"
    }
})

export default Home;
