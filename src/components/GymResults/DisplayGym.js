import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as storeActions from '../../actions/storeActions';

class DisplayGym extends Component {
	constructor(props) {
		super(props);

		this.currentGym = this.currentGym.bind(this);
	}

	currentGym(e) {
		const { gym, storeActions } = this.props;
		storeActions.storeCurrentLocationMarker(gym.location);
	}

	render() {
		const { gym, label } = this.props;
		return (
			<a
				className="list-group-item media"
				onClick={this.currentGym}
				role="button">
				<div className="media-left">
					<img className="media-object" src={gym.image_url}/>
				</div>

				<div className="media-body">
					<h4 className="media-heading">{gym.name}</h4>
					<h4 className="pull-right"><span className="glyphicon glyphicon-map-marker" style={styles.mapMarker}></span>{label}</h4>
					<img src={gym.rating_img_url} />
					<p><i>{gym.rating} out of 5 stars.</i></p>
				</div>
			</a>
		);
	}
}

const styles = {
	mapMarker: {
		color: '#DC5D4E'
	}
};

DisplayGym.propTypes = {
	gym: PropTypes.object.isRequired,
	storeActions: PropTypes.object,
	label: PropTypes.string
};

function mapStateToProps(state, ownProps) {
	return {

	};
}

function mapDispatchToProps(dispatch) {
	return {
		storeActions: bindActionCreators(storeActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayGym);
