import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const CheckboxContent = (props) => {
	const { children, style, onRemovePress, ...attributes } = props;

	return (
		<View style={style.concat(styles.wrapper)}>
			<TouchableOpacity {...attributes} style={styles.children}>{ children }</TouchableOpacity>
			<Icon 
				component={TouchableOpacity}
				style={styles.icon}
				type='material'
				name='clear'
				color='#ddd'
				onPress={onRemovePress} />
		</View>	
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	children: {
		marginLeft: 5,
		width: 300
	},
	icon: {
		marginLeft: 5
	}
});

export default CheckboxContent;
