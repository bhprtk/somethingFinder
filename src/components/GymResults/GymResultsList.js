import React, { Component, PropTypes } from 'react';

import DisplayGym from './DisplayGym';

class GymResultsList extends Component {
	constructor(props) {
		super(props);

		this.currentGym = this.currentGym.bind(this);
	}

	currentGym(e) {
		// console.log ('e.dataset.index:', e.dataset.index)
		// console.log ('e.target:', e.target)
	}

	render() {
		const { list } = this.props;
		let displayList;
		if(list) {
			displayList = list.map((gym, index) => {
				return (
					<ul
						key={index}
						className="list-group">
						<DisplayGym gym={gym} index={index} />
					</ul>
				);
			});
		} else {
			displayList = (
				<h1>Loading list...</h1>
			);
		}
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
