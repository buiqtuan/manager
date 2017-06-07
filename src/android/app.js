import React from 'react';
import Firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RouterComponent from './router';
import reducers from './reducers';

export default class App extends React.Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyA5pacAgKkD8ZBEr60y9E9jaQS8mR5qw48',
			authDomain: 'manager-de573.firebaseapp.com',
			databaseURL: 'https://manager-de573.firebaseio.com',
			projectId: 'manager-de573',
			storageBucket: 'manager-de573.appspot.com',
			messagingSenderId: '179610049505'
		};
		Firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<RouterComponent />
			</Provider>
		);
	}
}

