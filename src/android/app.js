import React from 'react';
import Firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LoginForm from './components/loginform';
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
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

