import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToBuyListScreen from '../screens/ShoppingListScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Shoping list" component={ToBuyListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
