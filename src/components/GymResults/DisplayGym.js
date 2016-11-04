import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as storeActions from '../../actions/storeActions';
import * as mapActions from '../../actions/mapActions';

import GymModal from './GymModal';

class DisplayGym extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		};

		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	showModal() {
		const { mapActions, gym } = this.props;
		let currentLocation;
		if(!this.props.currentLocation) {
			currentLocation = JSON.parse(sessionStorage.currentLocation);
		} else {
			currentLocation = this.props.currentLocation;
		}
		const origins = `${currentLocation.lat},${currentLocation.lng}`;
		const destinations = `${gym.location.coordinate.latitude},${gym.location.coordinate.longitude}`;
		mapActions.getDistance({ origins, destinations });
		this.setState({ showModal: true });
	}

	hideModal() {
		this.setState({ showModal: false });
	}

	render() {
		const { gym, label, distance, showMarkerOnHover } = this.props;
		const { showModal } = this.state;
		return (
			<div>
				<a
					className="list-group-item media"
					onClick={this.showModal}
					role="button"
					onMouseEnter={showMarkerOnHover}>
					<div>
						<div className="media-left">
							<img className="media-object" src={gym.image_url}/>
						</div>

						<div className="media-body">
							<h4 className="media-heading">{gym.name}</h4>
							<h4 className="pull-right"><span className="glyphicon glyphicon-map-marker" style={styles.mapMarker}></span>{label}</h4>
							<img src={gym.rating_img_url} />
							<p><i>{gym.rating} out of 5 stars.</i></p>
						</div>
					</div>
				</a>

				<GymModal
					show={showModal}
					hide={this.hideModal}
					gym={gym}
					distance={distance} />
			</div>
		);
	}
}

const styles = {
	mapMarker: {
		color: '#DC5D4E'
	}
};

DisplayGym.propTypes = {
	gym: PropTypes.object.isRequired,
	storeActions: PropTypes.object,
	label: PropTypes.string
};

function mapStateToProps(state, ownProps) {
	return {
		currentLocation: state.currentLocation.currentLocation,
		distance: state.distance.distance
	};
}

function mapDispatchToProps(dispatch) {
	return {
		storeActions: bindActionCreators(storeActions, dispatch),
		mapActions: bindActionCreators(mapActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayGym);
