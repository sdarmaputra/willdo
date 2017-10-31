import * as todo from '../actionTypes/todoActionTypes';

const todoReducer = (state = [], action) => {
	switch(action.type) {
		case todo.INIT_TODO:
			return action.todos.filter(todo => isTodoPropertiesPresent(todo));
		case todo.ADD_TODO:
			return [
				...state,
				action.todo
			];
		case todo.EDIT_TODO:
			return state.map(todo => {
				if (todo.id === action.id) return action.todo;
				else return todo;
			});
		case todo.REMOVE_TODO:
			return state.filter(todo => todo.id !== action.id);
		case todo.TOGGLE_TODO:
			return state.map(todo => {
				if (todo.id === action.id) {
					return Object.assign({}, todo, {
						isDone: !todo.isDone
					});
				} else return todo;
			});
		default:
			return state;
	}
}

const isTodoPropertiesPresent = (todo) => {
	let requiredProperties = ['id', 'text', 'isDone'];
	return requiredProperties.reduce((result, prop) => result && todo.hasOwnProperty(prop) && todo[prop] !== null, true);
}

export default todoReducer;
