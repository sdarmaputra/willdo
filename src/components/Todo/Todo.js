import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

import CheckboxContent from './CheckboxContent';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text ? this.props.text : '',
			isEditing: false
		};
		this.toggleEdit = this.toggleEdit.bind(this);
		this.editSubmit = this.editSubmit.bind(this);
		this.onRemovePress = this.onRemovePress.bind(this);
	}

	toggleEdit() {
		this.setState({
			isEditing: !this.state.isEditing
		});
	}

	editSubmit() {
		this.props.onEditSubmit(this.props.id, this.state.text);
	}

	onRemovePress() {
		this.props.onRemovePress(this.props.id);
	}

	render() { 
		return ( 
			this.state.isEditing 
				? 	<View style={[styles.todo, this.props.isDone && styles.todoDone]}>
					<TextInput 
						style={styles.input}
						placeholder='Task title'
						placeholderTextColor='#888'
						underlineColorAndroid='#ccc'
						value={this.state.text}
						returnKeyLabel='Submit'
						onChangeText={(text) => this.setState({text})}
						onSubmitEditing={this.editSubmit}
						onBlur={this.toggleEdit}
						onEndEditing={this.toggleEdit} />
					</View> 
				: 	<CheckBox 
						style={[styles.todo, this.props.isDone && styles.todoDone]}
						checked={this.props.isDone}
						iconType='material'
						checkedIcon='check'
						uncheckedIcon='check-box-outline-blank'
						checkedColor='#bbb'
						textStyle={this.props.isDone ? styles.todoTextDone : styles.todoText}
						component={CheckboxContent}
						title={this.props.text}
						onIconPress={() => this.props.toggle(this.props.id)} 
						onPress={this.toggleEdit}
						onRemovePress={this.onRemovePress} />
		);
	}
}

Todo.propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	text: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired,
	toggle: PropTypes.func.isRequired,
	onEditSubmit: PropTypes.func.isRequired,
	onRemovePress: PropTypes.func.isRequired
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
	},
	input: { 
		color: '#888',
		fontSize: 15,
		lineHeight: 10
	} 

});

export default Todo;
