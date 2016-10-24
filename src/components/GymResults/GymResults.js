import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as yelpActions from '../../actions/yelpActions';
import GymResultsList from './GymResultsList';

class GymResults extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// console.log('here ');
		const { place, yelpActions } = this.props;
		if(place) {
			yelpActions.findGyms(place);
		}
	}

	render() {
		const { place, gymResults } = this.props;

		if(!gymResults) {
			return (
				<h1>Loading...</h1>
			);
		} else {
			return (
				<GymResultsList
					list={gymResults.businesses} />
			);
		}
	}
}

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
