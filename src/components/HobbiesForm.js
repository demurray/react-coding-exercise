import React from 'react';

import HobbiesFormInput from './HobbiesFormInput.js';
import HobbiesFormResults from './HobbiesFormResults.js';

/**
 * Container for exercise form. Includes a heading, input section, and section to display results.
 */
module.exports = class HobbiesForm extends React.Component {
	render () {
		return (
			<div>
				<h3>Enter Name and Hobbies</h3>
				<hr />
				<HobbiesFormInput
					// Pass through all of the working copy data
					{...this.props.workingCopy}

					// Functions to update data
					updateFirstName={this.props.updateFirstName}
					updateLastName={this.props.updateLastName}
					addHobby={this.props.addHobby}
					removeHobby={this.props.removeHobby}
					updateActiveHobby={this.props.updateActiveHobby}

					// Submit the form
					submitForm={this.props.submitForm}

					// Let the HobbiesFormInput know whether we're submitting so it can disable the submit button
					submittingData={this.props.results.submittingData}
				/>
				<HobbiesFormResults
					{...this.props.results}
				/>
			</div>
		);
	}
}