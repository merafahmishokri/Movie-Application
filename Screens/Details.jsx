import { AirbnbRating } from '@rneui/themed';
import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Details = ({ route,navigation }) => {
    const { movie } = route.params;
    const backToHome=()=>{
        navigation.goBack()
    }
    return (
        <ScrollView style={styles.con}>
        <Image source={{ uri: "https://image.tmdb.org/t/p/w500/" + movie.poster_path }} style={styles.img} alt="movie"></Image>
            <View style={styles.nav}>
                <Ionicons name="chevron-back-outline" size={30} color={"white"} onPress={backToHome}/>
            </View>
            <View style={styles.info}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 23, margin: 10 }}>{movie.title}</Text>
                <Text style={[styles.txt]}>{movie.overview}</Text>
                <Text style={styles.txt}><Text style={{ fontWeight: "bold" }}>Date:   </Text>{movie.release_date}</Text>
                <Text style={styles.txt}><Text style={{ fontWeight: "bold" }}>Language:   </Text>{movie.original_language === "en" ? "English" : movie.original_language === "fr" ? "French" : movie.original_language === "hi" ? "Indian" : "Korean"}</Text>
                <View style={styles.rating}>
                    <View style={styles.view}>


                        <Text style={[styles.txt, { fontWeight: "bold" }]}>Rating: </Text>
                        <AirbnbRating
                            starContainerStyle={{
                                alignSelf: "center",
                                backgroundColor: "#45474B",
                                borderRadius: 20
                            }}
                            isDisabled={true}
                            showRating={false}
                            defaultRating={movie.vote_average / 2}
                            size={21}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    con: {
        color: "white",
        fontSize: 15,
        backgroundColor: "black",
    },
    img: {
        width: "100%",
        height: 570,

    },
    info: {
        margin: 20,
        alignItems: "center"
    },
    txt: {
        color: "white", margin: 13, marginHorizontal: 23, fontSize: 17, textAlign: "center"
    },
    view: {
        display: "flex", flexDirection: "row" 
    },
    nav:{
       position:"absolute",
       width:40,
       height:40,
       marginTop:40,
       borderRadius:100,
       justifyContent:"center",
       alignItems:"center",
       marginLeft:10
    }
})

export default Details;
