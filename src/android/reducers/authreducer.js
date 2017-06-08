import { 
	EMAIL_CHANGE, 
	PASSWORD_CHANGE, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL,
	LOGIN_USER_START } 
from '../actions/types';

const INIT_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGE:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGE:
			return { ...state, password: action.payload };
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INIT_STATE, user: action.payload };
		case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', password: '', loading: false };
		case LOGIN_USER_START:
			return { ...state, loading: true, error: '' };
		default:
			return state;
	}
};
