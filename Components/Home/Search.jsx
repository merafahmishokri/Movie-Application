import * as React from 'react';
import { Searchbar } from 'react-native-paper';
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
        lable: 'Top Rated',
        fun:()=>{
          dispatch(setMovies([false,false,false,true,false]))
        }
      },
      {
        value: '4',
        lable: 'Upcoming',
        fun:()=>{
          dispatch(setMovies([false,false,false,false,true]))
        }
      },
      {
        value: '5',
        lable: 'Now Playing',
        fun:()=>{
          dispatch(setMovies([false,true,false,false,false]))
        }
      }
    ];
    // console.log(searchQuery)
    const handleChange=(event)=>{
      setSearchQuery(event)
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
    <Image source={{uri:"https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D"}}
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
      height:400,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20
    },
    bar:{
        backgroundColor:"transparent",
        borderRadius:20,
        width:"64%",
        color:"white"
    },
    dropdown: {
        width:"30%",
        marginLeft:"6%",
        backgroundColor:"transparent",
        justifyContent:"center",
        textAlign:"center",
        borderRadius: 22,
        paddingLeft:20,
        
    },
    
    selectedTextStyle: {
      fontSize: 14,
      textAlign:"center"
    }
})

export default Search;

