import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CityTagItem from '../CityTagItem';
import styles from './cityTag.scss';

export default class CityTag extends PureComponent {
  static propTypes = {
    cityList: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentCity: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    setCurrentCity: PropTypes.func.isRequired
  };

  render() {
    const { cityList, currentCity, setCurrentCity } = this.props;
    return (
      <aside className={styles['aside-content']}>
        <h2 className={styles['aside-header']}>城市列表</h2>

        {cityList.map(city => (
          <CityTagItem
            key={city.id}
            isSelected={city.id === currentCity.id}
            city={city}
            setCurrentCity={setCurrentCity}
          />
        ))}
      </aside>
    );
  }
}
