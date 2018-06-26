import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getDateString } from '../../../utils/utils';
import styles from './cityActivityDisplayMainItem.scss';

export default class CityActivityDisplayMainItem extends PureComponent {
  static propTypes = {
    activity: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      begin_time: PropTypes.string.isRequired,
      end_time: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      wisher_count: PropTypes.number.isRequired,
      participant_count: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    const { activity } = this.props;
    return (
      <li className={styles['activity-item']}>
        <a href={activity.alt} className={styles['image-link']}>
          <img
            alt={activity.title}
            src={activity.image}
            className={styles['activity-image']}
          />
        </a>

        <div className={styles['activity-info']}>
          <a href={activity.alt} className={styles['activity-title']}>
            {activity.title}
          </a>

          <p className={styles['date-info']}>
            {getDateString(activity.begin_time, activity.end_time)}
          </p>

          <p className={styles['address-info']} title={activity.address}>
            {activity.address}
          </p>

          <p>{activity.wisher_count + activity.participant_count}人关注</p>
        </div>
      </li>
    );
  }
}
