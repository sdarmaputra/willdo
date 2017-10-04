import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, ToastAndroid } from 'react-native';

import * as todoActions from '../../actions/todoActions';

import Header from '../../components/Header';
import Todo from '../../components/Todo';
import SimpleTodoForm from '../../components/SimpleTodoForm';

class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.addTodo = this.addTodo.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
	}

	componentDidMount() {
		let todos = [];
		for (let i = 0; i < 5; i++) {
			todos[i] = {
				id: i,
				text: `Example task #${i}`,
				isDone: Math.round(Math.random()) === 1 ? true : false 
			}
		}
		this.props.initTodo(todos);
	}

	addTodo(text) {
		this.props.addTodo({
			id: this.props.todos.length + 1,
			text: text,
			isDone: false
		});		
		ToastAndroid.show('New task submitted!', ToastAndroid.SHORT);
	}

	toggleTodo(id) {
		let todo = this.props.todos.reduce((todo, current) => todo.id === id ? todo : current, {});
		let message = todo.isDone ? 'Oops! It hasn\'t finished yet?' : 'Horay! I\'ve finished a task!';
		this.props.toggleTodo(id);	
		ToastAndroid.show(message, ToastAndroid.SHORT);
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Header />
				<ScrollView style={styles.todos}>
					<SimpleTodoForm onSubmit={(text) => this.addTodo(text)} />
					{
						this.props.todos.filter(todo => !todo.isDone).map((todo, index) => <Todo key={`todo-${index}`} id={todo.id} text={todo.text} isDone={todo.isDone} toggle={this.toggleTodo} />)
					}
					<Text style={styles.aclamation}>Yayy! I've already finished ...</Text>
					{
						this.props.todos.filter(todo => todo.isDone).map((todo, index) => <Todo key={`todo-${index}`} id={todo.id} text={todo.text} isDone={todo.isDone} toggle={this.toggleTodo} />)
					}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: '#f2f2f2'
	},
	todos: {
		backgroundColor: '#f2f2f2',
		padding: 15,
		marginBottom: 20,
		flex: 1
	},
	aclamation: {
		color: '#aaa',
		textAlign: 'center',
		margin: 10,
		marginTop: 25
	}
});

const mapDispatchToProps = (dispatch) => {
	return {
		initTodo: (todos) => dispatch(todoActions.initTodo(todos)),
		addTodo: (todo) => dispatch(todoActions.addTodo(todo)),
		editTodo: (id, todo) => dispatch(todoActions.editTodo(id, todo)),
		removeTodo: (id) => dispatch(todoActions.removeTodo(id)),
		toggleTodo: (id) => dispatch(todoActions.toggleTodo(id))
	};
}

export default connect(state => state, mapDispatchToProps)(Todos)
