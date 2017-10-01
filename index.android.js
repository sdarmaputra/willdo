import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

import App from './src/pages/app';
import Splash from './src/pages/splash';

export default class willdo extends Component {
  render() {
    return (
    	<App />
	);
  }
}

AppRegistry.registerComponent('willdo', () => willdo);
