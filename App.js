import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import  productsReducer  from './store/reducers/products'
import ShopNavigator from './navigation/ShopNavigator';

export default function App() {

  const rootReducer = combineReducers({
    products: productsReducer
  })

  const store = createStore(rootReducer)

  return (
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
