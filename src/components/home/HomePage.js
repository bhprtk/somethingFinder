/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */

import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Spinner from 'react-spinkit';

import * as yelpActions from '../../actions/yelpActions';
import * as storeActions from '../../actions/storeActions';

class HomePage extends Component {

  constructor() {
    super();

    this.state = {
      loadingPosition: false,
      loadingCurrentLocation: false
    };

    this.inputChange = this.inputChange.bind(this);
    this.submitAddress = this.submitAddress.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }

  inputChange(e) {
    let input = e.target;
    this.setState({autocomplete: new google.maps.places.Autocomplete(input)});
  }

  submitAddress(e) {
    e.preventDefault();
    const {autocomplete} = this.state;
    const {yelpActions, storeActions} = this.props;
    const place = autocomplete.getPlace();

    if(place) {
      let location = {};
      location.lat = place.geometry.location.lat();
      location.lng = place.geometry.location.lng();
      this.setState({ loadingCurrentLocation: true });
      navigator.geolocation.getCurrentPosition(position => {
        if(position) {
          this.setState({ loadingCurrentLocation: false });
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          sessionStorage.currentLocation = JSON.stringify(currentLocation);
          storeActions.storeCurrentLocation(currentLocation);
          storeActions.storePlace(location);
          browserHistory.push("/results");
        }
      });
    }
  }

  getCurrentLocation() {
    this.setState({ loadingPosition: true });
    const { storeActions } = this.props;
    navigator.geolocation.getCurrentPosition(position => {
      if(position) {
        this.setState({ loadingPosition: false });
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        sessionStorage.currentLocation = JSON.stringify(location);
        storeActions.storeCurrentLocation(location);
        storeActions.storePlace(location);
        browserHistory.push("/results");
      }
    });
  }

  render() {
    return (
      <div className="home">
        <p className="text-center title">GYM FINDER</p>
        <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
          <button
            className="col-md-1 col-sm-1 col-xs-1"
            style={styles.getCurrentLocationButton}
            role="button"
            onClick={this.getCurrentLocation}>
            <If condition={!this.state.loadingPosition}>
              <span className="glyphicon glyphicon-map-marker"></span>
            </If>
            <If condition={this.state.loadingPosition}>
              <Spinner spinnerName="double-bounce" />
            </If>
          </button>
          <form
            onSubmit={this.submitAddress}>
            <input
              style={styles.searchBar}
              className="col-md-9 col-sm-9 col-xs-9"
              type="text"
              placeholder="Enter a location"
              onChange={this.inputChange}
              required />
            <button
              style={styles.searchButton}
              className="btn btn-default col-md-2 col-sm-2 col-xs-2">
              <If condition={!this.state.loadingCurrentLocation}>
                <strong style={styles.buttonText}>Search</strong>
              </If>
              <If condition={this.state.loadingCurrentLocation}>
                <Spinner spinnerName="three-bounce" />
              </If>
            </button>
          </form>

        </div>

      </div>
    );
  }
}

const styles = {
  searchBar: {
    height: 50,
    fontSize: 24
  },
  searchButton: {
    height: 50,
    background: '#90A4AE'
  },
  buttonText: {
    fontSize: 20
  },
  getCurrentLocationButton: {
    height: 50,
    fontSize: 20
  }
};

HomePage.propTypes = {
  yelpActions: PropTypes.object,
  storeActions: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    yelpActions: bindActionCreators(yelpActions, dispatch),
    storeActions: bindActionCreators(storeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
