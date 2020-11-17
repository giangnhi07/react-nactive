import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import SkiImage from '../assets/ski.png';

export default function CategoryListItem(props) {
	return (
		<View style={style.container}>
			<Text style={style.title}>CategoryListItem</Text>
			<Image source={SkiImage} style={style.categoryImage} />
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 16,
		borderRadius: 5,
		backgroundColor: '#FFF',
		shadowColor: '#000',
		shadowOpacity: 0.3,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 0 },
		elevation: 3,
		marginBottom: 8,
	},
	title: {
		fontWeight: '700',
		textTransform: 'uppercase',
		marginBottom: 8,
	},
	categoryImage: {
		width: 64,
		height: 64,
	},
});
