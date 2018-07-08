import React, { Component } from 'react';
import { observable, action, flow } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Facebook as Loading } from 'react-content-loader';
import CityActivityDisplayHeader from '../CityActivityDisplayHeader';
import CityActivityDisplayMain from '../CityActivityDisplayMain';
import { getActivities } from '../../../apis';

@observer
export default class CityActivityDisplayItem extends Component {
  static propTypes = {
    currentCity: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    currentActivityType: PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    dayTypes: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  componentDidMount() {
    const { currentCity, currentActivityType } = this.props;
    this.setActivityList(
      currentCity.id,
      this.currentDayType.value,
      currentActivityType.value
    );
  }

  @action
  setCurrentDayType = dayType => {
    if (dayType.value !== this.currentDayType.value) {
      this.currentDayType = dayType;
    }
  };

  setActivityList = flow(
    function*(loc, dayType, type, start, count) {
      try {
        const response = yield getActivities(loc, dayType, type, start, count);
        const data = response.data.events;
        this.activityList = data;
      } catch (error) {
        this.activityList = null;
        console.log(error);
      }
    }.bind(this)
  );

  componentWillReact() {
    const { currentCity, currentActivityType } = this.props;
    if (currentCity.id !== this.lastCity.id) {
      this.setActivityList(
        currentCity.id,
        this.currentDayType.value,
        currentActivityType.value
      );
      this.lastCity = currentCity;
    }
  }

  handleClick = dayType => {
    if (dayType.value !== this.currentDayType.value) {
      const { currentCity, currentActivityType } = this.props;
      this.setCurrentDayType(dayType);
      this.setActivityList(
        currentCity.id,
        dayType.value,
        currentActivityType.value
      );
    }
  };

  lastCity = this.props.currentCity;
  @observable currentDayType = this.props.dayTypes[0];
  @observable activityList = null;

  render() {
    const { currentActivityType, dayTypes } = this.props;
    return (
      <div>
        <CityActivityDisplayHeader
          currentDayType={this.currentDayType}
          currentActivityType={currentActivityType}
          dayTypes={dayTypes}
          handleClick={this.handleClick}
        />

        {this.activityList ? (
          <CityActivityDisplayMain activityList={this.activityList} />
        ) : (
          <Loading
            speed="1"
            primaryColor="#f6f5f2"
            style={{ marginBottom: '16px' }}
          />
        )}
      </div>
    );
  }
}
