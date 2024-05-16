import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './Navigation/DrawerNav';
import 'react-native-gesture-handler';

export default function App() {
  return (
    
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNav></DrawerNav>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
