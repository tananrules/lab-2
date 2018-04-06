import axios from 'axios';

export function isAuthenticated(boolean) {
	return {
		type: 'IS_AUTHENTICATED',
		boolean
	}
}

export function currentUser(userData) {
	return {
		type: 'CURRENT_USER',
		userData
	}
}

export function loginError(error) {
	return {
		type: 'LOGIN_ERROR',
		error
	}
}

//Login
export function login(credentials) {
	return function(dispatch) {
		axios.post('http://localhost:8080/api/auth/log-in', credentials).then((response) => {
			if(response.status === 200) {
				const user = response.data.data;
				const {token} = response.data;

				localStorage.setItem('token', token);
				localStorage.setItem('user', JSON.stringify(user));

				dispatch(isAuthenticated(true));
				dispatch(currentUser(user));

			} else {
				console.log("Unexpected errror")
			}
		}).catch((err) => {
			const {error} = err.response.data; 
			dispatch(loginError(error))
		});
	}
}


//Signup
export function signup(userData) {
	return function(dispatch) {
		axios.post('http://localhost:8080/api/auth/sign-up', userData).then((response) => {
			if(response.status === 200) {
				dispatch(currentUser(response.data));
			} else {

			}
		});
	}
}

export function logout() {
	return function(dispatch) {
		dispatch(isAuthenticated(false));
		dispatch(currentUser(null));
		localStorage.clear();
	}
}