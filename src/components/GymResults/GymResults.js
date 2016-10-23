import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as yelpActions from '../../actions/yelpActions';

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
		const { place } = this.props;
		if(!place) {
			return (
				<h1>Loading...</h1>
			);
		} else {
			return (
				<h1>Gym Results</h1>
			);
		}
	}
}

function mapStateToProps(state, ownProps) {
	return {
		place: state.place.place
	};
}

function mapDispatchToProps(dispatch) {
	return {
		yelpActions: bindActionCreators(yelpActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GymResults);
