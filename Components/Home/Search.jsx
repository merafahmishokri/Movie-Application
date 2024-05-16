import * as React from 'react';
import { Button, Searchbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.con}>
        <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={styles.bar}
    />
    <Button icon="filter" mode="contained" style={styles.btn}>
        Filter
    </Button>
    </View>
    
  );
}

const styles = StyleSheet.create({
    con:{
        margin:20,
        display:"flex",
        flexDirection:"row"
    },
    bar:{
        
        backgroundColor:"gray",
        borderRadius:20,
        width:"74%"
    },
    btn:{
        width:"20%",
        marginLeft:"6%",
        backgroundColor:"gray",
        justifyContent:"center",
        textAlign:"center"
    }
})

export default Search;

