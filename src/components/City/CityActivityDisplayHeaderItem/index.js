import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './cityActivityDisplayHeaderItem.scss';

export default class CityActivityDisplayHeaderItem extends PureComponent {
  static propTypes = {
    dayType: PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired,
    isSelected: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
  };

  render() {
    const { dayType, isSelected, handleClick } = this.props;
    return (
      <li className={styles['day-tag']}>
        <span
          role="button"
          tabIndex={0}
          className={isSelected ? styles['in-active'] : styles['not-active']}
          onClick={() => handleClick(dayType)}
        >
          {dayType.text}
        </span>
      </li>
    );
  }
}
