import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CityActivityDisplayHeaderItem from '../CityActivityDisplayHeaderItem';
import styles from './cityActivityDisplayHeader.scss';

export default class CityActivityDisplayHeader extends PureComponent {
  static propTypes = {
    currentDayType: PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    currentActivityType: PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    dayTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleClick: PropTypes.func.isRequired
  };

  render() {
    const {
      currentDayType,
      currentActivityType,
      dayTypes,
      handleClick
    } = this.props;
    return (
      <div className={styles['display-header']}>
        <h2 className={styles['display-title']}>{currentActivityType.text}</h2>

        <ul className={styles['day-list']}>
          {dayTypes.map(dayType => (
            <CityActivityDisplayHeaderItem
              key={dayType.value}
              dayType={dayType}
              isSelected={currentDayType.value === dayType.value}
              handleClick={handleClick}
            />
          ))}
        </ul>
      </div>
    );
  }
}
