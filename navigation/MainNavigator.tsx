import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShopingList from '../screens/ShopingList';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Купляце беларускае" component={ShopingList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
