import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const user = localStorage.getItem('user') || null;
const isAuthenticated = (localStorage.getItem('token') && localStorage.getItem('user')) ? true : false;

const defaultState = {
	defaultReducer: {
		displaySnackbar: false,
		snackbarMessage: "Default Message",
	},
	loginReducer: {
		isAuthenticated: isAuthenticated,
		currentUser: JSON.parse(user),
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, defaultState, composeEnhancers(
	applyMiddleware(logger, thunk)
));

export default store;