import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as storeActions from '../../actions/storeActions';

import GymModal from './GymModal';

class DisplayGym extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		};

		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	showModal() {
		this.setState({ showModal: true });
	}

	hideModal() {
		this.setState({ showModal: false });
	}

	render() {
		const { gym, label } = this.props;
		const { showModal } = this.state;
		return (
			<div>
				<a
					className="list-group-item media"
					onClick={this.showModal}
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

				<GymModal
					show={showModal}
					hide={this.hideModal}
					gym={gym} />
			</div>
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
