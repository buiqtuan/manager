import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default class App extends React.Component {
	render() {
		return (
			<Provider>
				<View>
					<Text>
						Hello!!
					</Text>
				</View>
			</Provider>
		);
	}
}

