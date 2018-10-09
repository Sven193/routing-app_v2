import axios from 'axios';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export const signin = ({email, password}, callback) => async dispatch => {
	try {
		const response = await axios.post('http://localhost:4010/signin', {
			email, password
		});

		dispatch({ type: AUTH_USER, payload: response.data.token });
		localStorage.setItem('token', response.data.token);
		callback();
	} catch (e) {
		dispatch({ type: AUTH_ERROR, payload: 'Invalid login'});
	}
}

export const logout = ( callback ) => {
	localStorage.removeItem('token');

	return {
		type: AUTH_USER, 
		payload: ''
	};
	callback()
};
