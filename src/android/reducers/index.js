import { combineReducers } from 'redux';
import AuthReducer from './authreducer';
import EmployeeFormReducer from './employeeformreducer';

export default combineReducers({
	auth: AuthReducer,
	employeeForm: EmployeeFormReducer
});
