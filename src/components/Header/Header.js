import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends React.Component {
	render() {
		let today = new Date();
		let todayString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
		return (
			<View style={styles.wrapper}>
				<View>
				<Text style={styles.subTitle}>{ todayString }</Text>
				<Text style={styles.title}>Today, I will ...</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		backgroundColor: '#3498db',
		height: 150,
		justifyContent: 'center'
	},
	title: {
		color: '#ffffff',
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 5,
		textAlign: 'center'
	},
	subTitle: {
		color: '#ffffff',
		textAlign: 'center'
	}
});
