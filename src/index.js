import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <Routes />
    <StatusBar backgroundColor="#0C0A17" barStyle="light-content" />
  </Provider>
);

export default App;
