import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as yelpActions from '../../actions/yelpActions';
import GymResultsList from './GymResultsList';
import GoogleMap from './GoogleMap';

class GymResults extends Component {
	constructor(props) {
		super(props);

		let gymResults = null;

		if(sessionStorage.gymResults) {
			gymResults = JSON.parse(sessionStorage.gymResults);
		}

		this.state = {
			gymResults
		};
	}

	componentDidMount() {
		const { place, yelpActions } = this.props;
		if(place) {
			yelpActions.findGyms(place);
		}
	}

	componentWillReceiveProps(newProps) {
		if(newProps.gymResults !== this.state.gymResults) {
			sessionStorage.gymResults = JSON.stringify(newProps.gymResults);
			this.setState({
				gymResults: JSON.parse(sessionStorage.gymResults)
			});
		}
	}

	render() {
		const { place } = this.props;
		const { gymResults } = this.state;

		if(!gymResults) {
			return (
				<h1 className="text-center">Loading...</h1>
			);
		} else {
			return (
				<div className="container-fluid" style={styles.container}>
					<div className="col-md-4">
						<GymResultsList
							list={gymResults.businesses} />
					</div>
					<div className="col-md-8">
						<GoogleMap />
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
		gymResults: state.gymResults.gymResults
	};
}

function mapDispatchToProps(dispatch) {
	return {
		yelpActions: bindActionCreators(yelpActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GymResults);
