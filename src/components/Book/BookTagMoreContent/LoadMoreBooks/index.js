import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './loadMoreBooks.scss';

export default class LoadMoreBooks extends PureComponent {
  static propTypes = {
    setPageCount: PropTypes.func.isRequired
  };

  handleClick = () => {
    const { setPageCount } = this.props;
    setPageCount(null, 10);
  };

  render() {
    return (
      <div
        role="button"
        tabIndex={0}
        className={styles['load-more']}
        onClick={this.handleClick}
      >
        加载更多
      </div>
    );
  }
}
