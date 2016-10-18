import React, {Component} from 'react';

class HomePage extends Component {

	constructor() {
		super();

		this.inputChange = this.inputChange.bind(this);
		this.submitAddress = this.submitAddress.bind(this);
	}

	inputChange(e) {
		let input = e.target;
		const autocomplete = new google.maps.places.Autocomplete(input);
		this.setState({autocomplete});
	}

	submitAddress(e) {
		e.preventDefault();
		const {autocomplete} = this.state;
		const place = autocomplete.getPlace();
		console.log ('place:', place)
	}

	render() {
		return (
			<div>
				<h1>hello</h1>
				<form onSubmit={this.submitAddress}>
					<input
						className="form-control"
						type="text"
						placeholder="Enter a location"
						onChange={this.inputChange} />

				</form>

			</div>
		);
	}
}

export default HomePage;
