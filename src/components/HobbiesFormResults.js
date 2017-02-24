import React from 'react';

/**
 * Status and results of form submission. Either a loading indicator, a success message and summary of what was
 * submitted, or nothing is displayed.
 */
module.exports = class HobbiesFormResults extends React.Component {
	render () {
		if (this.props.submitting) {
			return (
				<div>
					<hr />
					<div className="alert alert-warning">Loading...</div>
				</div>
			);
		} else if (this.props.submittedData) {
			return (
				<div>
					<hr />
					<div className="alert alert-success">Done!</div>
					<div className="form-group">
						<label htmlFor="submitted-data">Submitted Data:</label>
						<textarea readOnly id="submitted-data" className="form-control" value={this.props.submittedData.firstName + ' ' + this.props.submittedData.lastName} />
					</div>
				</div>
			);
		} else {
			return <div />
		}
	}
}