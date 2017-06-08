import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginform';
import EmployeeList from './components/employeelist';
import EmployeeCreate from './components/employeecreate';

class RouterComponent extends React.Component {
	render() {
		return (
			<Router sceneStyle={{ paddingTop: 65 }}>
				<Scene key='auth' >
					<Scene key='login' component={LoginForm} title='Please Login' initial />
				</Scene>

				<Scene key='main'>
					<Scene
						onRight={() => Actions.employeeCreate()}
						rightTitle='Add' 
						key='employeeList' 
						component={EmployeeList} 
						title='Employees' 
					/>
					<Scene title="Create Employee" key='employeeCreate' component={EmployeeCreate} />
				</Scene>
			</Router>
		);
	}
}


export default RouterComponent;
