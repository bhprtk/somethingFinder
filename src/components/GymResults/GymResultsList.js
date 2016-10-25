import React, { Component, PropTypes } from 'react';

import DisplayGym from './DisplayGym';

class GymResultsList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { list } = this.props;
		let displayList = list.map((gym, index) => {
			return (
				<ul key={index} className="list-group">
					<DisplayGym gym={gym}/>
				</ul>
			);
		});
		return (
			<div className="scrollable-div">
				{displayList}
			</div>
		);
	}
}

GymResultsList.propTypes = {
	list: PropTypes.array.isRequired
};

export default GymResultsList;
