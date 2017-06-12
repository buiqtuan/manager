import Firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
	EMPLOYEE_UPDATE, RESET, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS 
} from './types';

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
		Firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.on('value', snapshot => {
				dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() 
			});
		});
	};
};

export const employeeSave = ({ name, phone, shift, uid }) => {
	const { currentUser } = Firebase.auth();

	return () => {
		Firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
		.set({ name, phone, shift })
		.then(() => {
			Actions.employeeList({ type: RESET });
		});
	};
};

export const clearFormAfterUpdate = () => {
	return { type: EMPLOYEE_SAVE_SUCCESS };
};

export const employeeDelete = ({ uid }) => {
	const { currentUser } = Firebase.auth();

	return () => {
		Firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
		.remove()
		.then(() => {
			Actions.employeeList({ type: RESET });
		});
	};
};
