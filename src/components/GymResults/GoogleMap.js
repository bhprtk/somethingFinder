import React, { Component, PropTypes } from 'react';

class GoogleMap extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log ('this.refs.maphere:', this.refs.maphere)
		const uluru = {lat: 37.269165, lng: -121.940235};
		const map = new google.maps.Map(this.refs.maphere, {
			zoom: 16,
			center: uluru
		});
		const marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
	}

	render() {
		return (
			<div>
				<h1>GoogleMap</h1>
				<div ref="maphere" style={styles.maphere}></div>
			</div>
		);
	}
}

const styles = {
	maphere: {
		height: '400px',
    width: '100%'
	}
}

export default GoogleMap;
