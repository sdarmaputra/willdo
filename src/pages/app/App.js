import { StackNavigator } from 'react-navigation';

import Splash from '../splash';
import Todos from '../todos';

const defaultOptions = {
	navigationOptions: {
		headerStyle: {
			height: 0
		}
	}
};

const App = StackNavigator({
	Splash: {
		screen: Splash
	},
	Todos: { 
		screen: Todos
	}
}, defaultOptions);

export default App;
