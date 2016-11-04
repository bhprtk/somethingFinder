import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as yelpActions from '../../actions/yelpActions';
import GymResultsList from './GymResultsList';
import GoogleMap from './GoogleMap';

class GymResults extends Component {
	constructor(props) {
		super(props);

		let gymResults = null, gymLocations = null;

		if(sessionStorage.gymResults) {
			gymResults = JSON.parse(sessionStorage.gymResults);
		}
		if(sessionStorage.gymLocations) {
			gymLocations = JSON.parse(sessionStorage.gymLocations);
		}

		this.state = {
			gymResults,
			gymLocations
		};

		this.showMarkerOnHover = this.showMarkerOnHover.bind(this);
	}

	componentDidMount() {
		const { place, yelpActions } = this.props;
		if(place) {
			yelpActions.findGyms(place);
		}
	}

	showMarkerOnHover() {
		console.log('showMarkerOnHover')
	}

	componentWillReceiveProps(newProps) {
		if(newProps.gymResults && newProps.gymResults !== this.state.gymResults) {
			sessionStorage.gymResults = JSON.stringify(newProps.gymResults);
			this.setState({
				gymResults: JSON.parse(sessionStorage.gymResults)
			});
		}
		if(newProps.gymLocations && newProps.gymLocations !== this.state.gymLocations) {
			sessionStorage.gymLocations = JSON.stringify(newProps.gymLocations);
			this.setState({
				gymLocations: newProps.gymLocations
			});
		}
	}

	render() {
		const { place } = this.props;
		const { gymResults, gymLocations } = this.state;
		if(!gymResults || !gymLocations) {
			return (
				<h1 className="text-center">Loading...</h1>
			);
		} else {
			return (
				<div className="container-fluid" style={styles.container}>
					<div className="col-md-4">
						<GymResultsList
							list={gymResults.businesses}
							showMarkerOnHover={this.showMarkerOnHover} />
					</div>
					<div className="col-md-8">
						<GoogleMap
							gymResults={this.state.gymResults}
							gymLocations={this.state.gymLocations}/>
					</div>
				</div>
			);
		}
	}
}

const styles = {
	container: {
		paddingTop: 10,
		color: '#696969'
	}
};

GymResults.propTypes = {
	place: PropTypes.object,
	yelpActions: PropTypes.object.isRequired,
	gymResults: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	return {
		place: state.place.place,
		gymResults: state.gymResults.gymResults,
		gymLocations: state.gymLocations.gymLocations
	};
}

function mapDispatchToProps(dispatch) {
	return {
		yelpActions: bindActionCreators(yelpActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GymResults);
