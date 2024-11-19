import React from 'react';
import Router from 'router/router';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/store';

const Index = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default Index;
