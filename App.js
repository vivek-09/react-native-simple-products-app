import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './src/Reducers';
import createSagaMiddleware from "redux-saga";
import { watcher } from './src/Saga';

import AppWithNavigationState, { middleware } from './src/AppNavigator';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer, 
  {
    productState: {
      products: []
    },
    searchState:{
      products: [],
      text: ''
    }
  },
  applyMiddleware(middleware, sagaMiddleware)
);
sagaMiddleware.run(watcher);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

