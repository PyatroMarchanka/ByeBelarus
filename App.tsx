import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainNavigator from './navigation/MainNavigator';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }).then(() => {
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return <AppLoading />;
  } else
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
}

export default App;
