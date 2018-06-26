import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CityActivityDisplayItem from '../CityActivityDisplayItem';
import styles from './cityActivityDisplay.scss';

export default class CityActivityDisplay extends PureComponent {
  static propTypes = {
    currentCity: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    activityTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
    dayTypes: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { currentCity, activityTypes, dayTypes } = this.props;
    return (
      <div className={styles['display-content']}>
        {activityTypes.map(activityType => (
          <CityActivityDisplayItem
            key={activityType.value}
            currentCity={currentCity}
            currentActivityType={activityType}
            dayTypes={dayTypes}
          />
        ))}
      </div>
    );
  }
}
