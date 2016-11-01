/* eslint-disable no-undef */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class GoogleMap extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(newProps) {
		if(newProps.gymResults && newProps.gymLocations && newProps.gymResults !== this.props.gymResults && newProps.gymLocations !== this.props.gymLocations) {
			const { gymResults, gymLocations } = newProps;
			const results = gymResults.businesses;
			const map = new google.maps.Map(this.refs.maphere, {
				zoom: 14,
				center: gymLocations[Math.floor(gymLocations.length / 2)]
			});

			const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

			const markers = gymLocations.map((location, i) => {
				const name = results[i].name;
				const ratingImg = results[i].rating_img_url_small;
				const rating = results[i].rating;

				const contentString = `
					<strong>${name}</strong>
					<br />
					<img src=${ratingImg} />
					<span>(${rating})</span>
				`;

				const infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				const marker = new google.maps.Marker({
					position: location,
					label: labels[i % labels.length],
					animation: google.maps.Animation.DROP,
					map: map
				});
				marker.addListener('mouseover', () => {
					infowindow.open(map, marker);
				});
				marker.addListener('mouseout', () => {
					infowindow.close();
				});
				return marker;
			});
		}
	}

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
	currentLocationMarker: PropTypes.object,
	gymLocations: PropTypes.array,
	gymResults: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {
		currentLocationMarker: state.currentLocationMarker.currentLocationMarker
	};
}

export default connect(mapStateToProps)(GoogleMap);
