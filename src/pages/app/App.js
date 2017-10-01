import { StackNavigator } from 'react-navigation';

import Todos from '../todos';

const App = StackNavigator({
	Todos: { 
		screen: Todos,
		navigationOptions: {
			headerStyle: {
				height: 0
			}
		}
	}
});

export default App;
