import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CityActivityDisplayMainItem from '../CityActivityDisplayMainItem';

export default class CityActivityDisplayMain extends PureComponent {
  static propTypes = {
    activityList: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { activityList } = this.props;
    return (
      <ul>
        {activityList.map(activity => (
          <CityActivityDisplayMainItem key={activity.id} activity={activity} />
        ))}
      </ul>
    );
  }
}
