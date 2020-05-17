import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingListScreen from './screens/ShoppingListScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Shoping list" component={ShoppingListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
