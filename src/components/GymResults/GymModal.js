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

		this.getDirections = this.getDirections.bind(this);
	}

	getDirections() {
		const { gym, mapActions } = this.props;
		const { latitude, longitude } = gym.location.coordinate;
		const origins = `${latitude},${longitude}`;
		this.setState({ loadingCurrentPosition: true });
		let destinations;
		navigator.geolocation.getCurrentPosition(position => {
			this.setState({ loadingCurrentPosition: false });
			destinations = `${position.coords.latitude},${position.coords.longitude}`;
			mapActions.getDistance({ origins, destinations });
    });
	}

	render() {
		const { show, hide, gym, distance } = this.props;
		console.log ('distance:', distance)
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
						<If condition={!this.state.loadingCurrentPosition}>
							Get Directions
						</If>
						<If condition={this.state.loadingCurrentPosition}>
							<span className="fa fa-spinner fa-pulse fa-fw"></span>
						</If>
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
					<If condition={distance}>
						<p>{distance.distance.text}</p>
					</If>
				</Modal.Body>
			</Modal>
		);
	}
}

GymModal.propTypes = {
	hide: PropTypes.func,
	gym: PropTypes.object,
	mapActions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {
		distance: state.distance.distance
	};
}

function mapDispatchToProps(dispatch) {
	return {
		mapActions: bindActionCreators(mapActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GymModal);
