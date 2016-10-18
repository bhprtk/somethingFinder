import React, {Component} from 'react';
import Geosuggest from 'react-geosuggest';

class HomePage extends Component {

	constructor() {
		super();

		this.inputChange = this.inputChange.bind(this);
	}

	inputChange(e) {
		let input = e.target;
		const autocomplete = new google.maps.places.Autocomplete(input);
		console.log ('input:', input)
	}

	render() {
		return (
			<div>
				<h1>hello</h1>
				<input
					id="pac-input"
					className="controls"
					type="text"
        	placeholder="Enter a location"
					onChange={this.inputChange} />
			</div>
		);
	}
}

export default HomePage;
