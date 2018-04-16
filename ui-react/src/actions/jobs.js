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
		axios.post('http://localhost:8080/api/jobs', data).then((response) => {
			if(response.status === 201) {
				dispatch(snackbarMessage("Job added successfully!"));
				dispatch(showSnackbar(true));
			} else {
				console.error("Unexpected error")
			}
		}).catch((err) => {
			const {error} = err.response.data;
			console.error(error);
		});
	}
} 