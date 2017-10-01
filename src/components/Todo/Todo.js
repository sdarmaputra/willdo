import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const Todo = (props) => ( 
	<CheckBox 
		style={[styles.todo, props.isDone && styles.todoDone]}
		checked={props.isDone}
		iconType='material'
		checkedIcon='check'
		uncheckedIcon='check-box-outline-blank'
		checkedColor='#bbb'
		textStyle={props.isDone ? styles.todoTextDone : styles.todoText}
		title={props.text}
		onIconPress={() => props.toggle(props.id)} 
		onPress={() => props.toggle(props.id)} />
);

Todo.propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	text: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	todo: {
		padding: 15,
		backgroundColor: '#fff',
		borderColor: '#eee',
		borderBottomWidth: 1
	},
	todoText: {
		color: '#555',
		fontSize: 15
	},
	todoDone: {
		borderColor: '#eee',
		borderWidth: 1
	},
	todoTextDone: {
		color: '#bbb',
		textDecorationLine: 'line-through'
	}
});

export default Todo;
