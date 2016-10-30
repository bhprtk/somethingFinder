/* eslint-disable no-undef */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class GoogleMap extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(newProps) {
		if(newProps.gymLocations !== this.props.gymLocations && newProps.gymLocations) {
			const { gymLocations } = newProps;
			console.log ('gymLocations:', gymLocations)
			let lats = [];
			gymLocations.forEach(location => {
				lats.push(location.lat);
			});
			lats.sort();
			const med = lats[Math.floor(lats.length / 2)];

			const map = new google.maps.Map(this.refs.maphere, {
				zoom: 8,
				center: {lat: -28.024, lng: 140.887}
			});

			const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

			const markers = gymLocations.map((location, i) => {
				return new google.maps.Marker({
					position: location,
					label: labels[i % labels.length],
					map: map
				});
			});
		}
		// if(newProps.currentLocationMarker !== this.props.currentLocationMarker) {
		// 	const { currentLocationMarker } = newProps;
		// 	const center = {
		// 		lat: currentLocationMarker.coordinate.latitude,
		// 		lng: currentLocationMarker.coordinate.longitude
		// 	};
		// 	const map = new google.maps.Map(this.refs.maphere, {
		// 		zoom: 16,
		// 		center: center
		// 	});
		// 	// const marker = new google.maps.Marker({
		// 	// 	position: center,
		// 	// 	map: map
		// 	// });
		//
		// }


	}

	render() {
		console.log ('this.props.gymLocations:', this.props.gymLocations)
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
		gymLocations: state.gymLocations.gymLocations
	};
}

export default connect(mapStateToProps)(GoogleMap);
