import React, {Component} from 'react';
import {connect} from 'react-redux';

class HomePage extends Component {

  constructor() {
    super();

    this.inputChange = this.inputChange.bind(this);
    this.submitAddress = this.submitAddress.bind(this);
    this.requestName = this.requestName.bind(this);
  }

  inputChange(e) {
    let input = e.target;
    this.setState({autocomplete: new google.maps.places.Autocomplete(input)});
  }

  submitAddress(e) {
    e.preventDefault();
    const {autocomplete} = this.state;
    const place = autocomplete.getPlace();
    console.log ('place:', place)
  }

  requestName() {
    console.log('request name');
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <button
          className="btn btn-primary btn-large"
          onClick={this.requestName}>
          Request Name
        </button>
        <form onSubmit={this.submitAddress}>
          <input
            className="form-control"
            type="text"
            placeholder="Enter a location"
            onChange={this.inputChange} />

        </form>

        <button>
          test component
        </button>

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
