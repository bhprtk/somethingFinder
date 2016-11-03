import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

class GymModal extends Component {
	constructor(props) {
		super(props);

		this.getDirections = this.getDirections.bind(this);
	}

	getDirections() {
		console.log('getDirections')
	}

	render() {
		const { show, hide, gym } = this.props;
		const address = `${gym.location.address[0]}, ${gym.location.city}, ${gym.location.state_code} ${gym.location.postal_code}`;
		const phone = `tel:${gym.phone}`;
		const unformatted_phone = gym.phone;
		let formatted_phone = null;
		if(unformatted_phone) {
			formatted_phone = `(${unformatted_phone.substring(0, 3)}) ${unformatted_phone.substring(3, 6)}-${unformatted_phone.substring(6)}`;
		}
		let openStatus = "Open";
		if(gym.is_closed) {
			openStatus = "Closed";
		}
		return (
			<Modal show={show} onHide={hide}>
				<Modal.Header>
					<Modal.Title className="pull-left">{gym.name}</Modal.Title>
					<button
						className="pull-right btn btn-default"
						onClick={this.getDirections}>
						Get Directions
					</button>
				</Modal.Header>
				<Modal.Body>
					<p>
						<strong><span className="glyphicon glyphicon-map-marker"></span> Address: </strong>{address}
					</p>
					<If condition={formatted_phone}>
						<p>
							<strong><span className="glyphicon glyphicon-earphone"></span> Phone: </strong>
							<a href={phone}>{formatted_phone}</a>
						</p>
					</If>
					<p>
						<strong><span className="glyphicon glyphicon-lock"></span><i> {openStatus} </i>Now</strong>
					</p>
				</Modal.Body>
			</Modal>
		);
	}
}

GymModal.propTypes = {
	hide: PropTypes.func,
	gym: PropTypes.object
};

export default GymModal;
