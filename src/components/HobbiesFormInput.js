import React from 'react';

import HobbyListItem from './HobbyListItem.js';

/**
 * Form to accept user input and submit the data.
 */
module.exports = class HobbiesFormInput extends React.Component {
	render () {
		const hobbyList = (this.props.hobbies || []).map((hobby) => {
			let removeHobby = (event) => {
				this.props.removeHobby(event, hobby)
			};
			return (
				<HobbyListItem hobby={hobby} key={hobby} removeHobby={removeHobby}/>
			);
		});

		const newHobbyErrorMessageEl = this.props.newHobbyErrorMessage
			? <p className="text-danger">{this.props.newHobbyErrorMessage}</p>
			: null;

		const enableAddHobby = !this.props.newHobbyErrorMessage && (this.props.newHobby || '').length;

		const enableSubmit = !this.props.submittingData && !!this.props.firstName && this.props.firstName.length && !!this.props.lastName && this.props.lastName.length;

		const submitForm = (event) => {
			event.preventDefault();
			if (!this.props.newHobby || !this.props.newHobby.length || confirm('Looks like you started typing a hobby and didn\'t add it. Are you sure you want to submit?')) {
				this.props.submitForm(this.props.firstName, this.props.lastName, this.props.hobbies);
			}
		};

		const hobbiesLabel = this.props.hobbies.length
			? 'Hobbies (' + this.props.hobbies.length + '):'
			: 'Hobbies:';

		return (
			<form onSubmit={submitForm}>
				<div className="form-group">
					<label htmlFor="first-name-input">First Name:</label>
					<input type="text" className="form-control" id='first-name-input' value={this.props.firstName} onChange={this.props.updateFirstName}/>
				</div>
				<div className="form-group">
					<label htmlFor="last-name-input">Last Name:</label>
					<input type="text" className="form-control" id='last-name-input' value={this.props.lastName} onChange={this.props.updateLastName}/>
				</div>
				<div className="form-group">
					<label>{hobbiesLabel}</label>
					{hobbyList}
				</div>
				<div className="form-group">
					<div className="input-group">
						<input type="text" className="form-control" id='hobby-name-input' value={this.props.newHobby} onChange={this.props.updateActiveHobby}/>
						<span className="input-group-btn">
							<button className="btn btn-primary" type="button" disabled={!enableAddHobby} onClick={this.props.addHobby}>Add</button>
						</span>
					</div>
					{newHobbyErrorMessageEl}
				</div>
				<button type="submit" className="btn btn-primary" disabled={!enableSubmit}>Submit</button>
			</form>
		);
	}
}