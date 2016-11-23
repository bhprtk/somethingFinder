import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';



import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mapActions from '../../actions/mapActions';

class GymModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loadingCurrentPosition: false
		};
	}

	render() {
		const { show, hide, gym, distance } = this.props;
		const address = `${gym.location.address[0]}, ${gym.location.city}, ${gym.location.state_code} ${gym.location.postal_code}`;
		const phone = `tel:${gym.phone}`;
		const unformatted_phone = gym.phone;
		let miles;
		if(distance) {
			miles = (distance.distance.value * 0.000621371).toFixed(1);
		}
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
					<a
						className="pull-right btn btn-default"
						onClick={this.getDirections}
						target="_blank"
						href={gym.url}>
						View on Yelp
					</a>
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
					<If condition={miles}>
						<p>
							<strong><span className="fa fa-location-arrow"></span> {miles}</strong> miles away
							</p>
					</If>
				</Modal.Body>
			</Modal>
		);
	}
}

GymModal.propTypes = {
	hide: PropTypes.func,
	gym: PropTypes.object,
	mapActions: PropTypes.object,
	distance: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		mapActions: bindActionCreators(mapActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GymModal);
