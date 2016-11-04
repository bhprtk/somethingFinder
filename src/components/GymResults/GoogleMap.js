/* eslint-disable no-undef */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class GoogleMap extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gymResults: this.props.gymResults,
			gymLocations: this.props.gymLocations
		};

		this.buildMap = this.buildMap.bind(this);
	}

	componentDidMount() {
		// this.buildMap();
	}

	buildMap() {
		const { gymResults, gymLocations } = this.state;
		console.log ('this.state:', this.state)
		const results = gymResults.businesses;
		console.log ('results:', results)
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

	componentWillReceiveProps(newProps) {
		if(newProps.gymResults && newProps.gymLocations && newProps.gymResults !== this.props.gymResults && newProps.gymLocations !== this.props.gymLocations) {
			console.log ('newProps:', newProps)
			this.setState({
				gymResults: newProps.gymResults,
				gymLocations: newProps.gymLocations
			}, () => {
				this.buildMap();
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
