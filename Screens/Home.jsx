import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Movies from '../Components/Home/Movies';
import Search from '../Components/Home/Search';

const Home = () => {
    return (
        <ScrollView style={styles.con}>
            <Search></Search>
            <Movies></Movies>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    con:{
        // backgroundColor:"#45474B"
        backgroundColor:"black"
    }
})

export default Home;
