import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';

const Stack = createStackNavigator();


const StackNav = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      );
}

const styles = StyleSheet.create({})

export default StackNav;
