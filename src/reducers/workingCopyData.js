import _ from 'lodash';

const initialState = {firstName: '', lastName: '', hobbies: [], newHobby: '', newHobbyErrorMessage: null};

const workingCopyData = (state = initialState, action) => {
	switch (action.type) {
		case 'working_copy_update_first_name':
			return Object.assign({}, state, {firstName: action.payload});
		case 'working_copy_update_last_name':
			return Object.assign({}, state, {lastName: action.payload});
		case 'working_copy_update_active_hobby':
			var newState = Object.assign({}, state, {newHobby: action.payload});
			if (_.indexOf(newState.hobbies, newState.newHobby) !== -1) {
				newState.newHobbyErrorMessage = 'That hobby is already in the list.'
			} else {
				newState.newHobbyErrorMessage = null;
			}
			return newState;
		case 'working_copy_add_hobby':
			var newState = Object.assign({}, state);
			newState.hobbies = [...state.hobbies, state.newHobby];
			newState.newHobby = '';
			return newState;
		case 'working_copy_remove_hobby':
			var newState = Object.assign({}, state, {hobbies: [...state.hobbies]});
			_.remove(newState.hobbies, (hobby) => {
				return hobby === action.payload;
			});
			return newState;
		case 'submitted_data_success':
			return initialState;
		default:
			return state;
	}
}

module.exports = workingCopyData;