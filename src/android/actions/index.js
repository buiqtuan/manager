import Firebase from 'firebase';
import { EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, 
	LOGIN_USER_START } from './types';

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
		dispatch({ type: LOGIN_USER_START });

		Firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch(() => {
			Firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((user) => loginUserSuccess(dispatch, user))
			.catch(() => loginUserFail(dispatch));
		});
	};
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
};
