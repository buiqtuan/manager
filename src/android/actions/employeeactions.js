import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, RESET, EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	};
};

export const employeeCreate = ({ name, phone, shift }) => {
	const { currentUser } = Firebase.auth();

	return (dispatch) => {
		Firebase.database().ref(`/users/${currentUser.uid}/employees`).push({ 
			name, phone, shift
		})
		.then(() => {
			dispatch({ type: EMPLOYEE_CREATE });
			Actions.employeeList({ type: RESET });
		});
	};
};

export const employeesFetch = () => {
	const { currentUser } = Firebase.auth();

	return (dispatch) => {
		Firebase.database.ref(`/users/${currentUser.uid}/employees`)
		.on('value', snapshot => {
			dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
		});
	};
};
