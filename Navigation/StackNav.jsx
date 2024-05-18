import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import BottomNav from './BottomNav';

const Stack = createStackNavigator();


const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Bottom" component={BottomNav} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Details" component={Details} options={{headerShown: false }}/>
        </Stack.Navigator>
      );
}

export default StackNav;
