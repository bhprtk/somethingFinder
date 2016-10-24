import React, { Component, PropTypes } from 'react';

class DisplayGym extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { gym } = this.props;
		console.log ('gym:', gym)
		return (
			<li className="list-group-item">
				<h4>{gym.name}</h4>
				<img src={gym.rating_img_url} />
			</li>
		);
	}
}

DisplayGym.propTypes = {
	gym: PropTypes.object.isRequired
};

export default DisplayGym;
