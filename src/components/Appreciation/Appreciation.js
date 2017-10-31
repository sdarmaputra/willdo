import React from 'react';
import PropTypes from 'prop-types';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Appreciation = (props) => (
	<Modal
		visible={props.visible}
		animationType='fade'
		transparent={true}
		onRequestClose={() => props.onClose()} >
		<View style={styles.wrapper}>
		<View style={styles.body}>
			<Text style={styles.text}>{props.text}</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => props.onClose()}>
				<Text style={styles.buttonText}>Okay!</Text>
			</TouchableOpacity>
		</View>
		</View>
	</Modal>
)

Appreciation.propTypes = {
	visible: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	body: {
		backgroundColor: '#fff',
		width: 300,
		height: 300,
		padding: 25,
		justifyContent: 'center'
	},
	text: {
		fontSize: 20,
		textAlign: 'center'
	},
	button: {
		backgroundColor: '#3498db',
		padding: 10,
		marginTop: 40
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center'
	}
});

export default Appreciation;
