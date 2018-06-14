import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './bookTagMainContent.scss';

export default class BookTagMainContent extends PureComponent {
  static propTypes = {
    currentBookTag: PropTypes.string.isRequired
  };

  render() {
    const { currentBookTag } = this.props;
    return (
      <div className={styles['main-content']}>
        <div className={styles['main-header']}>
          <h2 className={styles['main-title']}>{currentBookTag}</h2>
          <NavLink to="book-tag-more-info" className={styles['nav-link']}>
            更多»
          </NavLink>
        </div>
      </div>
    );
  }
}
