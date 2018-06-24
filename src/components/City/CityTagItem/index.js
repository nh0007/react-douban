import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './cityTagItem.scss';

export default class CityTagItem extends PureComponent {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    setCurrentCity: PropTypes.func.isRequired
  };

  render() {
    const { isSelected, city, setCurrentCity } = this.props;
    return (
      <li className={`${styles['tag-item']}`}>
        <button
          className={`${
            isSelected ? styles['in-active'] : styles['not-active']
          }`}
          onClick={() => setCurrentCity(city)}
        >
          {city.name}
        </button>
      </li>
    );
  }
}
