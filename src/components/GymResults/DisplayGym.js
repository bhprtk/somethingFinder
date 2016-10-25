import React, { Component, PropTypes } from 'react';

class DisplayGym extends Component {
	constructor(props) {
		super(props);

		this.currentGym = this.currentGym.bind(this);
	}

	currentGym(e) {
		console.log ('e.target.dataset.index:', e.target.dataset.index)
	}

	render() {
		const { gym, index } = this.props;
		return (
			<a
				className="list-group-item media"
				onClick={this.currentGym}
				role="button"
				data-index={index}>
				<div className="media-left">
					<img className="media-object" src={gym.image_url}/>
				</div>

				<div className="media-body">
					<h4 className="media-heading">{gym.name}</h4>
					<img src={gym.rating_img_url} />
					<p><i>{gym.rating} out of 5 stars.</i></p>
				</div>
			</a>
		);
	}
}

DisplayGym.propTypes = {
	gym: PropTypes.object.isRequired
};

export default DisplayGym;
