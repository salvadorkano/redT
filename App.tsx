import React from 'react';
import Router from 'router/router';
import 'react-native-gesture-handler';
import {AppProviders} from './src/context/AppProviders';

const Index = () => {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  );
};

export default Index;
