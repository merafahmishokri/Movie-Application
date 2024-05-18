import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './Navigation/DrawerNav';
import 'react-native-gesture-handler';
import BottomNav from './Navigation/BottomNav';
import StackNav from './Navigation/StackNav';

export default function App() {
  return (
    
    <Provider store={store}>
      <NavigationContainer>
        <StackNav>
        </StackNav>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"black"
  },
});
