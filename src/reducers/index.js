var combineReducers = require('redux').combineReducers;

const appReducers = combineReducers({
	submittedData: require('./submittedData.js'),
	workingCopyData: require('./workingCopyData.js')
});

module.exports = appReducers;
