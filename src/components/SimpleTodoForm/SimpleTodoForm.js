import React from 'react';
import { View, TextInput } from 'react-native';

export default class SimpleTodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
		this.submit = this.submit.bind(this);
	}

	submit() {
		this.props.onSubmit(this.state.text);
		this.setState({ text: '' })
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<TextInput 
					style={styles.input}
					placeholder='New task'
					placeholderTextColor='#888'
					underlineColorAndroid='#ccc'
					value={this.state.text}
					returnKeyLabel='Submit'
					onChangeText={(text) => this.setState({text})}
					onSubmitEditing={this.submit}/>
			</View>
		);
	}
}

const styles = {
	wrapper: {
		padding: 15,
		backgroundColor: '#fff',
		borderColor: '#eee',
		borderBottomWidth: 1
	}, 
	input: { 
		color: '#888',
		fontSize: 15,
		lineHeight: 10
	} 
};
