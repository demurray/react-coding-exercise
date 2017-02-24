import React from 'react';
import _ from 'lodash';

/**
 * Displays a hobby (just a string) in a list. If property 'removeHobby' is specified, a link to invoke that function
 * will be rendered.
 */
module.exports = class HobbyListItem extends React.Component {
	render () {
		let removeHobby, removeHobbyEl;
		if (this.props.removeHobby) {
			removeHobby = _.bind(this.props.removeHobby, null, this.props.hobby);
			removeHobbyEl = <a href="#" className="col-xs-2" title="Remove Hobby" onClick={this.props.removeHobby}>X</a>;
		}
		return (
			<div className="row">
				<div className="col-xs-10">{this.props.hobby}</div>
				{removeHobbyEl}
			</div>
		);
	}
}