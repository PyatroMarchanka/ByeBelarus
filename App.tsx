import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainNavigator from './navigation/MainNavigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
