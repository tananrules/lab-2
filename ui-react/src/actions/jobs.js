import axios from 'axios';

export function showSnackbar(boolean) {
	return {
		type: 'SHOW_SANCKBAR',
		boolean
	}
}

export function hideSnackbar(boolean) {
	return {
		type: 'HIDE_SANCKBAR',
		boolean
	}
}

export function snackbarMessage(message) {
	return {
		type: 'SNACKBAR_MESSAGE',
		message
	}
}


//Post Project
export function postProject(data) {
	return function(dispatch) {
		// dispatch(snackbarMessage("Shrusti with mallu"));
		// dispatch(showSnackbar(true));
		// axios.get('http://localhost:8080/api/jobs', data).then((response) => {
		// 	debugger
		// })
		debugger
		axios.post('http://localhost:8080/api/jobs', data).then((response) => {
			debugger
			if(response.status === 200) {
				

			} else {
				console.log("Unexpected error")
			}
		}).catch((err) => {
			const {error} = err.response.data;
			console.error(error);
		});
	}
} 