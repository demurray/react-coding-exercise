var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');

var appReducer = require('./reducers/index.js');

var HobbiesFormContainer = require('./containers/HobbiesFormContainer.js');

const store = Redux.createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<div className="row">
		<div className="col-xs-6 col-xs-offset-3">
			<HobbiesFormContainer store={store} />
		</div>
	</div>,
	document.getElementById('root')
);
