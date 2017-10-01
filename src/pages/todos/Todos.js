import React from 'react';
import { View, Text, StyleSheet, ScrollView, ToastAndroid } from 'react-native';

import Header from '../../components/Header';
import Todo from '../../components/Todo';

export default class Todos extends React.Component {
	constructor(props) {
		super(props);
		let todos = [];
		for (let i = 0; i < 15; i++) {
			todos[i] = {
				id: i,
				text: `todo #${i}`,
				isDone: Math.round(Math.random()) === 1 ? true : false 
			}
		}
		this.state = {
			todos: todos		
		}

		this.toggleTodo = this.toggleTodo.bind(this)
	}

	toggleTodo(id) {
		let todo = this.state.todos.reduce((todo, current) => todo.id === id ? todo : current, {});
		let message = todo.isDone ? 'Oops! It hasn\'t finished yet?' : 'Horay! I\'ve finished a task!';
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					return Object.assign({}, todo, {
						isDone: !todo.isDone
					});
				} else return todo;
			})
		});
		ToastAndroid.show(message, ToastAndroid.SHORT);
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Header />
				<ScrollView style={styles.todos}>
					{
						this.state.todos.filter(todo => !todo.isDone).map((todo, index) => <Todo key={`todo-${index}`} id={todo.id} text={todo.text} isDone={todo.isDone} toggle={this.toggleTodo} />)
					}
					<Text style={styles.aclamation}>Yayy! I've already finished ...</Text>
					{
						this.state.todos.filter(todo => todo.isDone).map((todo, index) => <Todo key={`todo-${index}`} id={todo.id} text={todo.text} isDone={todo.isDone} toggle={this.toggleTodo} />)
					}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: '#fff'
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

