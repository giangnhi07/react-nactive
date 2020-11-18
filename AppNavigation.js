import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Categories from './screens/categories';
import Category from './screens/category';

const Stack = createStackNavigator();

class AppNavigation extends React.Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Categories" component={Categories} />
					<Stack.Screen name="Category" component={Category} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

export default AppNavigation;
