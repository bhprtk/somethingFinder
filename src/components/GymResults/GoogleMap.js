/* eslint-disable no-undef */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class GoogleMap extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log('here ');
	}

	// componentWillReceiveProps(newProps) {
	// 	if(newProps.currentLocationMarker !== this.props.currentLocationMarker) {
	// 		const { currentLocationMarker } = newProps;
	// 		const center = {
	// 			lat: currentLocationMarker.coordinate.latitude,
	// 			lng: currentLocationMarker.coordinate.longitude
	// 		};
	// 		const map = new google.maps.Map(this.refs.maphere, {
	// 			zoom: 16,
	// 			center: center
	// 		});
	// 		// const marker = new google.maps.Marker({
	// 		// 	position: center,
	// 		// 	map: map
	// 		// });
	//
	// 	}
	// }

	render() {
		return (
			<div>
				<div ref="maphere" style={styles.maphere}></div>
			</div>
		);
	}
}

const styles = {
	maphere: {
		height: '50vh',
    width: '100%'
	}
};

GoogleMap.propTypes = {
	currentLocationMarker: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {
		currentLocationMarker: state.currentLocationMarker.currentLocationMarker,
		gymLocations: state.gymLocations
	};
}

export default connect(mapStateToProps)(GoogleMap);
