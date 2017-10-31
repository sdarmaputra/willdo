import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, ToastAndroid } from 'react-native';

import * as todoActions from '../../actions/todoActions';

import Header from '../../components/Header';
import Todo from '../../components/Todo';
import SimpleTodoForm from '../../components/SimpleTodoForm';
import Appreciation from '../../components/Appreciation';

class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showAppreciation: false,
			appreciationViewed: false
		};
		this.addTodo = this.addTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
		this.renderTodoItem = this.renderTodoItem.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);		
		this.checkRemainingTodos = this.checkRemainingTodos.bind(this);
		this.closeAppreciation = this.closeAppreciation.bind(this);
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

	componentDidUpdate() {
		this.checkRemainingTodos();
	}

	addTodo(text) {
		this.props.addTodo({
			id: this.props.todos.length + 1,
			text: text,
			isDone: false
		});		
		ToastAndroid.show('New task submitted!', ToastAndroid.SHORT);
	}

	editTodo(id, text) {
		let todo = this.props.todos.reduce((result, current) => current.id === id ? current : result, {});
		this.props.editTodo(id, Object.assign({}, todo, {
			text
		}));
		ToastAndroid.show('Task successfully edited!', ToastAndroid.SHORT);

	}

	removeTodo(id) {
		this.props.removeTodo(id);
		ToastAndroid.show('Task successfully removed!', ToastAndroid.SHORT);

	}

	renderTodoItem(todo, index) {
		return <Todo 
				key={`todo-${index}`} 
				id={todo.id} 
				text={todo.text} 
				isDone={todo.isDone} 
				toggle={this.toggleTodo} 
				onEditSubmit={(id, text) => this.editTodo(id, text)} 
				onRemovePress={(id) => this.removeTodo(id)} />
	}

	toggleTodo(id) {
		let todo = this.props.todos.reduce((todo, current) => todo.id === id ? todo : current, {});
		let message = todo.isDone ? 'Oops! It hasn\'t finished yet?' : 'Horay! I\'ve finished a task!';
		this.props.toggleTodo(id);	
		ToastAndroid.show(message, ToastAndroid.SHORT);
	}

	checkRemainingTodos() {
		if (this.props.todos.filter(todo => !todo.isDone).length === 0 && !this.state.showAppreciation && !this.state.appreciationViewed) {
			this.setState({
				showAppreciation: true
			});
		}	
		if (this.props.todos.filter(todo => !todo.isDone).length > 0 && this.state.appreciationViewed) {
			this.setState({
				appreciationViewed: false
			});
		}
	}

	closeAppreciation() {
		this.setState({
			showAppreciation: false,
			appreciationViewed: true
		})
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Appreciation 
					visible={this.state.showAppreciation}
					text='Horayy! You have finished all task!'
					onClose={this.closeAppreciation} />
				<Header />
				<View style={styles.form}>
					<SimpleTodoForm onSubmit={(text) => this.addTodo(text)} />
				</View>
				<ScrollView style={styles.todos}>
					{
						this.props.todos.filter(todo => !todo.isDone).map((todo, index) => this.renderTodoItem(todo, index))
					}
					<Text style={styles.aclamation}>Yayy! I've already finished ...</Text>
					{
						this.props.todos.filter(todo => todo.isDone).map((todo, index) => this.renderTodoItem(todo, index))
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
	form: {
		top: -50,
		padding: 15,
		marginBottom: -50
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
