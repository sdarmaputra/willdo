import * as todo from '../actionTypes/todoActionTypes';

export const initTodo = (todos) => {
	return {
		type: todo.INIT_TODO,
		todos
	};
}

export const addTodo = (newTodo) => {
	return {
		type: todo.ADD_TODO,
		todo: newTodo
	};
}

export const editTodo = (id, updatedTodo) => {
	return {
		type: todo.EDIT_TODO,
		id,
		todo: updatedTodo
	};
}

export const removeTodo = (id) => {
	return {
		type: todo.REMOVE_TODO,
		id
	};
}

export const toggleTodo = (id) => {
	return {
		type: todo.TOGGLE_TODO,
		id
	};
}
