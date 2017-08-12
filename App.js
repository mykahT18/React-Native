import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import devToolsEnhancer from 'remote-redux-devtools';
// import root reducer
import rootReducer from './src/core-modules/reducers'
import TodoApp from './src/containers/TodoApp'

// Create a object for default data for state
const store = createStore(rootReducer, devToolsEnhancer() ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <TodoApp style={styles.container} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
