import Firebase from 'firebase';
import { EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESS } from './types';

export const emailChange = (text) => {
	return {
		type: EMAIL_CHANGE,
		payload: text
	};
};

export const passwordChange = (text) => {
	return {
		type: PASSWORD_CHANGE,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		Firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => { 
			dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
		});
	};
};
