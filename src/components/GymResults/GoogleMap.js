/* eslint-disable no-undef */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class GoogleMap extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log ('this.props.gymLocations:', this.props.gymLocations)
	}

	// componentWillReceiveProps(newProps) {
	// 	if(newProps.gymLocations !== this.props.gymLocations && newProps.gymLocations) {
	// 		const { gymLocations } = newProps;
	//
	// 		const map = new google.maps.Map(this.refs.maphere, {
	// 			zoom: 14,
	// 			center: gymLocations[Math.floor(gymLocations.length / 2)]
	// 		});
	//
	// 		const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	//
	// 		const markers = gymLocations.map((location, i) => {
	// 			const marker = new google.maps.Marker({
	// 				position: location,
	// 				label: labels[i % labels.length],
	// 				animation: google.maps.Animation.DROP,
	// 				map: map
	// 			});
	// 			marker.addListener('click', function() {
	// 				console.log('what');
	// 			})
	// 			return marker;
	// 		});
	// 	}
	// 	// if(newProps.currentLocationMarker !== this.props.currentLocationMarker) {
	// 	// 	const { currentLocationMarker } = newProps;
	// 	// 	const center = {
	// 	// 		lat: currentLocationMarker.coordinate.latitude,
	// 	// 		lng: currentLocationMarker.coordinate.longitude
	// 	// 	};
	// 	// 	const map = new google.maps.Map(this.refs.maphere, {
	// 	// 		zoom: 16,
	// 	// 		center: center
	// 	// 	});
	// 	// 	// const marker = new google.maps.Marker({
	// 	// 	// 	position: center,
	// 	// 	// 	map: map
	// 	// 	// });
	// 	//
	// 	// }
	//
	//
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
		height: '100vh',
    width: '100%'
	}
};

GoogleMap.propTypes = {
	currentLocationMarker: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {
		currentLocationMarker: state.currentLocationMarker.currentLocationMarker
	};
}

export default connect(mapStateToProps)(GoogleMap);
