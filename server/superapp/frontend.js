import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import FoodDeliveryScreen from './screens/FoodDeliveryScreen';
// other screens...

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="FoodDelivery" component={FoodDeliveryScreen} />
        {/* other screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
