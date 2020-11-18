import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, Alert } from 'react-native';
import SkiImage from '../assets/ski.png';

export default function CategoryListItem(props) {
	const { category, onPress } = props;
	return (
		<TouchableOpacity activeOpacity={0.5} onPress={onPress}>
			<View style={style.container}>
				<Text style={style.title}>{category.name}</Text>
				<Image source={SkiImage} style={style.categoryImage} />
			</View>
		</TouchableOpacity>
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
