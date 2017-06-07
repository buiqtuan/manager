import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/loginform';

class RouterComponent extends React.Component {
	render() {
		return (
			<Router sceneStyle={{ paddingTop: 65 }}>
				<Scene key='login' component={LoginForm} title='Please Login' />
			</Router>
		);
	}
}



export default RouterComponent;
