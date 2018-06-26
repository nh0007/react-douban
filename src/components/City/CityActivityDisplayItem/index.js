import React, { Component } from 'react';
import { observable, action, flow } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
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

  componentWillMount() {
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
        console.log(error);
      }
    }.bind(this)
  );

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

  @observable currentDayType = this.props.dayTypes[0];
  @observable activityList = [];

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

        {this.activityList.length !== 0 && (
          <CityActivityDisplayMain activityList={this.activityList} />
        )}
      </div>
    );
  }
}
