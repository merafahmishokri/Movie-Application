import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

const EmptyFavorite = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Image source={{uri:"https://images.unsplash.com/photo-1526674215851-1adc0e4dbd5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1wdHklMjBtb3ZpZXN8ZW58MHx8MHx8fDA%3D"}}
          style={styles.img}
          alt='background' 
        ></Image>
        <Text style={styles.txt}>Favorites Empty</Text>
        <Button icon="home" mode="contained" style={styles.btn} onPress={()=>{navigation.navigate('Home')}}>
                    Go To Home
        </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    img:{
        width:"100%",
        height:"100%"
    },
    txt:{
        color:"white",
        position:"absolute",
        marginTop:"50%",
        fontSize:40,
        paddingLeft:"20%"
    },
    btn:{
        backgroundColor:"#DFD0B8",
        borderRadius:10,
        position:"absolute",
        marginTop:"90%",
        marginLeft:"30%",
        width:"40%",
        
    }
})

export default EmptyFavorite;
