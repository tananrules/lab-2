import { combineReducers } from 'redux';
import loginReducer from './login';

const defaultReducer = (state = {displaySnackbar: false, snackbarMessage: "Default Message",}, action) => {
	switch(action.type) {
	  case 'SHOW_SANCKBAR':
	    return Object.assign({},
	      state, {
	      displaySnackbar: true
	    });
	  case 'HIDE_SANCKBAR':
	    return Object.assign({},
	      state, {
	      displaySnackbar: false
	    });
	  case 'SNACKBAR_MESSAGE':
	    return Object.assign({},
	      state, {
	      snackbarMessage: action.message
	    });
	  default:
	    return state;
	}
}

const rootReducer = combineReducers({
	defaultReducer,
  loginReducer,
});

export default rootReducer;