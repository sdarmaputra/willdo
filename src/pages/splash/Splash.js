import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends React.Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.title}>WillDo!!</Text>
				<Text style={styles.subTitle}>I'll show my productivity!</Text>
			</View>
		);	
	}
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		backgroundColor: '#3498db',
		flex: 1,
		justifyContent: 'center'
	},
	title: {
		color: '#ffffff',
		fontSize: 30,
		fontWeight: 'bold',
		margin: 10,
		textAlign: 'center'
	},
	subTitle: {
		color: '#ffffff',
		textAlign: 'center'
	}
});
