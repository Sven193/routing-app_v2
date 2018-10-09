import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dataReducer from './data_reducer';
import auth from './auth_reducer';

const rootReducer = combineReducers({
	form: formReducer,
	data: dataReducer,
	auth,
});

export default rootReducer;
