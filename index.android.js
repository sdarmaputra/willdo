import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, Text } from 'react-native';

import store from './src/store/configureStore';

import App from './src/pages/app';
import Splash from './src/pages/splash';

export default class willdo extends Component {
  render() {
    return (
		<Provider store={store}>
	    	<App />
		</Provider>
	);
  }
}

AppRegistry.registerComponent('willdo', () => willdo);
