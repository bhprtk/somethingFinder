import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as nameActions from '../../actions/nameActions';


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
    console.log ('place.geometry.location.lat():', place.geometry.location.lat())
  }

  requestName() {
    const {requestName} = this.props.nameActions;
    console.log('request name');
    requestName();
    console.log ('this.props.name:', this.props.name)
  }

  render() {
    return (
      <div className="home">
        <h1 className="text-center title">GYM FINDER</h1>
        <div className="col-md-6 col-md-offset-3">
          <form onSubmit={this.submitAddress}>
            <input
              className="form-control"
              type="text"
              placeholder="Enter a location"
              onChange={this.inputChange} />

          </form>

        </div>

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    nameActions: bindActionCreators(nameActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
