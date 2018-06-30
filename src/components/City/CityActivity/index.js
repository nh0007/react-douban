import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Facebook as Loading } from 'react-content-loader';
import CityActivityDisplay from '../CityActivityDisplay';
import CityTag from '../CityTag';

@inject('cityStore')
@observer
export default class CityActivity extends Component {
  static propTypes = {
    cityStore: PropTypes.shape({
      cities: PropTypes.arrayOf(PropTypes.object).isRequired,
      currentCity: PropTypes.object.isRequired,
      activityTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
      dayTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
      setCurrentCity: PropTypes.func.isRequired,
      setCities: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount() {
    const { setCities } = this.props.cityStore;
    setCities();
  }

  render() {
    const {
      cities,
      currentCity,
      activityTypes,
      dayTypes,
      setCurrentCity
    } = this.props.cityStore;
    return (
      <div>
        {cities.length !== 0 ? (
          <div>
            <CityTag
              cityList={cities}
              currentCity={currentCity}
              setCurrentCity={setCurrentCity}
            />

            <CityActivityDisplay
              currentCity={currentCity}
              activityTypes={activityTypes}
              dayTypes={dayTypes}
            />
          </div>
        ) : (
          <Loading speed="1" primaryColor="#f6f5f2" width="500" height="165" />
        )}
      </div>
    );
  }
}
