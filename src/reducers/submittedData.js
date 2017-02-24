const submittedData = (state = {submitting: false, submittedData: null}, action) => {
	switch (action.type) {
		case 'submitted_data_loading':
			return Object.assign({}, state, {submitting: action.payload});
		case 'submitted_data_success':
			return Object.assign({}, state, {submittedData: action.payload});
		default:
			return state;
	}
}

module.exports = submittedData;