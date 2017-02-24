var connect = require('react-redux').connect;
var HobbiesForm = require('../components/HobbiesForm.js');

const mapStateToProps = (state) => {
	return {
		workingCopy: {
			firstName: state.workingCopyData.firstName,
			lastName: state.workingCopyData.lastName,
			hobbies: state.workingCopyData.hobbies,
			newHobbyErrorMessage: state.workingCopyData.newHobbyErrorMessage,
			newHobby: state.workingCopyData.newHobby
		},
		results: {
			submitting: state.submittedData.submitting,
			submittedData: state.submittedData.submittedData
		}
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addHobby: () => {
			dispatch({type: 'working_copy_add_hobby'})
		},
		removeHobby: (event, hobby) => {
			event.preventDefault();
			dispatch({type: 'working_copy_remove_hobby', payload: hobby})
		},
		updateActiveHobby: (event) => {
			dispatch({type: 'working_copy_update_active_hobby', payload: event.target.value})
		},
		updateFirstName: (event) => {
			dispatch({type: 'working_copy_update_first_name', payload: event.target.value})
		},
		updateLastName: (event) => {
			dispatch({type: 'working_copy_update_last_name', payload: event.target.value})
		},
		submitForm: (firstName, lastName, hobbies) => {
			dispatch({type: 'submitted_data_loading', payload: true});

			console.log('Simulating submit of data:', {firstName, lastName, hobbies});

			setTimeout(() => {
				dispatch({type: 'submitted_data_loading', payload: false});

				// I'm assuming that the imaginary backend only returns a success code. If it returned
				// the data I posted, I would use that for the submitted_data_success payload
				dispatch({type: 'submitted_data_success', payload: {firstName, lastName}});
			}, 2000)
		}
	};
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(HobbiesForm);