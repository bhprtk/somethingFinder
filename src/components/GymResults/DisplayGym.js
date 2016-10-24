import React, { Component, PropTypes } from 'react';

class DisplayGym extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { gym } = this.props;
		console.log ('gym:', gym)
		return (
			<li className="list-group-item media">
				<div className="media-left">
					<img className="media-object" src={gym.image_url} />
				</div>

				<div className="media-body">
					<h4 className="media-heading">{gym.name}</h4>
					<img src={gym.rating_img_url} />
					<p><i>{gym.rating} out of 5 stars.</i></p>
				</div>
			</li>
		);
	}
}

DisplayGym.propTypes = {
	gym: PropTypes.object.isRequired
};

export default DisplayGym;
