import * as React from 'react';
import { Button, Searchbar } from 'react-native-paper';
import { Image, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {searchMovies, setMovies } from '../../Redux/slices/movieSlice';
import { SelectCountry } from 'react-native-element-dropdown';


const Search = () => {
  const [country, setCountry] = React.useState('1');
    const [searchQuery, setSearchQuery] = React.useState('');
    const dispatch =useDispatch()
    
    const NowPlayingmovies=useSelector(state=>state.movies.NowPlaying)
    const Popularmovies=useSelector(state=>state.movies.Popular)
    const TopRatedmovies=useSelector(state=>state.movies.TopRated)
    const Upcomingmovies=useSelector(state=>state.movies.Upcoming)
    
    const local_data = [
      {
        value: '1',
        lable: 'All',
        fun:()=>{
          dispatch(setMovies([false,true,true,true,true]))
        }
      },
      {value: '2',
        lable: 'Popular',
        fun:()=>{
          dispatch(setMovies([false,false,true,false,false]))
        }
      },
      {
        value: '3',
        lable: 'Top Movies',
        fun:()=>{
          dispatch(setMovies([false,false,false,true,false]))
        }
      },
      {
        value: '4',
        lable: 'Upcoming Movies',
        fun:()=>{
          dispatch(setMovies([false,false,false,false,true]))
        }
      },
      {
        value: '5',
        lable: 'Now Playing Movies',
        fun:()=>{
          dispatch(setMovies([false,true,false,false,false]))
        }
      }
    ];
    // console.log(searchQuery)
    const handleChange=(event)=>{
      setSearchQuery(event)
      console.log(event)
      if(event){
        const newMovies1=NowPlayingmovies.filter(m=>m.title.includes(event))
        const newMovies2=Popularmovies.filter(m=>m.title.includes(event))
        const newMovies3=TopRatedmovies.filter(m=>m.title.includes(event))
        const newMovies4=Upcomingmovies.filter(m=>m.title.includes(event))
        const newMovies=[...newMovies1,...newMovies2,...newMovies3,...newMovies4]
        const uniqueArray = newMovies.reduce((acc, current) => {
          const x = acc.find(item => item.id === current.id);
          if (!x) {
              return acc.concat([current]);
          } else {
              return acc;
          }
      }, []);
        dispatch(searchMovies(uniqueArray))
        dispatch(setMovies([true,false,false,false,false]))
      }else{
        dispatch(setMovies([false,true,true,true,true]))
      }
    }
  return (
    <>
    <Image source={{uri:"https://i.pinimg.com/236x/bd/ed/4e/bded4e69bdb160d738327ae4063af23b.jpg"}}
          style={styles.img}
          alt='background'
          
    ></Image>
    <View style={styles.con}>
        <Searchbar
      placeholder="Search"
      onChangeText={handleChange}
      value={searchQuery}
      style={styles.bar}
    />
    <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        maxHeight={200}
        value={country}
        data={local_data}
        valueField="value"
        placeholder="Sort"
        labelField="lable"
        onChange={e => {
          setCountry(e.value);
          e.fun()
        }}
        
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    con:{
        margin:20,
        display:"flex",
        flexDirection:"row",
        position:"absolute"
        
    },
    img:{
      width:"100%",
      height:500
    },
    bar:{
        backgroundColor:"transparent",
        borderRadius:20,
        width:"69%",
        color:"white"
    },
    dropdown: {
        width:"25%",
        marginLeft:"6%",
        backgroundColor:"gray",
        justifyContent:"center",
        textAlign:"center",
        backgroundColor:"gray",
        borderRadius: 22,
        paddingLeft:20
    },
    
    selectedTextStyle: {
      fontSize: 14,
    }
})

export default Search;

