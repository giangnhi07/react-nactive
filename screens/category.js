import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Category extends React.Component {
	render() {
		return (
			<View>
				<Text>Category</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'stretch',
		justifyContent: 'center',
		paddingLeft: 16,
		paddingRight: 16,
	},
});
