import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View} from 'react-native';
// stack Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// redux, reducer 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendsReducer from './src/reducers/FriendsReducer';


import LoginScreen from './src/containers/LoginScreen';


const Stack = createStackNavigator();
const store = createStore(friendsReducer);

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
        <LoginScreen></LoginScreen>
      </Provider>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;