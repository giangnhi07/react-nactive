import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default function App() {
	return (
		<View style={styles.container}>
			<ScrollView style={{ paddingLeft: 16, paddingRight: 16 }}>
				<CategoryListItem />
				<CategoryListItem />
				<CategoryListItem />
				<CategoryListItem />
				<CategoryListItem />
				<CategoryListItem />
				<CategoryListItem />
			</ScrollView>

			<StatusBar style="auto" />
		</View>
	);
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
