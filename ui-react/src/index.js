import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Redux Store
import { Provider } from 'react-redux';
import store from './store/index';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Provider store={store}>
    <Router>
			<Route path="/" component={App} />
    </Router>
  </Provider>,
	document.getElementById('root'));
registerServiceWorker();
