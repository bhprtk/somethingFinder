import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

class GymModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { show, hide, gym } = this.props;
		const address = `${gym.location.address[0]}, ${gym.location.city}, ${gym.location.state_code} ${gym.location.postal_code}`;
		const phone = `tel:${gym.phone}`;
		const unformatted_phone = gym.phone;
		let formatted_phone = null;
		console.log ('gym.phone:', gym.phone)
		if(unformatted_phone) {
			formatted_phone = `(${unformatted_phone.substring(0, 3)}) ${unformatted_phone.substring(3, 6)}-${unformatted_phone.substring(6)}`;
		}
		console.log ('gym:', gym)
		return (
			<Modal show={show} onHide={hide}>
				<Modal.Header closeButton>
					<Modal.Title>{gym.name}</Modal.Title>
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
				</Modal.Body>
			</Modal>
		);
	}
}

GymModal.propTypes = {
	show: PropTypes.Boolean,
	hide: PropTypes.function,
	gym: PropTypes.object
};

export default GymModal;
