import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

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
		console.log ('this.props.currentLocationMarker:', this.props.currentLocationMarker)
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

function mapStateToProps(state, ownProps) {
	return {
		currentLocationMarker: state.currentLocationMarker.currentLocationMarker
	};
}

export default connect(mapStateToProps)(GoogleMap);
