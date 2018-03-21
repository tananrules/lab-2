const loginReducer = (state = {isAuthenticated: false, loginError: '', currentUser: null }, action) => {
	switch(action.type) {
	  case 'IS_AUTHENTICATED':
	    return Object.assign({},
	      state, {
	      isAuthenticated: action.boolean
	    });
	  case 'CURRENT_USER':
	    return Object.assign({},
	      state, {
	      currentUser: action.userData
	    });
	  case 'LOGIN_ERROR':
	  	return Object.assign({},
	      state, {
	      loginError: action.error
	    });
	  default:
	    return state;
	}
}

export default loginReducer;