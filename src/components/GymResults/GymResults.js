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
	}

	render() {
		console.log ('this.props:', this.props)
		return (
			<h1>Gym Results</h1>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		place: state.place
	};
}

function mapDispatchToProps(dispatch) {
	return {
		yelpActions: bindActionCreators(yelpActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GymResults);
