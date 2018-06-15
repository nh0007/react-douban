import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import CommonSliderDot from './CommonSliderDot';
import styles from './commonSliderDots.scss';

export default class CommonSliderDots extends PureComponent {
  static propTypes = {
    pageCount: Proptypes.number.isRequired,
    currentPage: Proptypes.number.isRequired,
    handleDotClick: Proptypes.func.isRequired,
    backgroundColor: Proptypes.string.isRequired
  };

  getDotList() {
    const {
      pageCount,
      currentPage,
      handleDotClick,
      backgroundColor
    } = this.props;
    const dotList = [];
    for (let i = 0; i < pageCount; i += 1) {
      dotList.push(
        <CommonSliderDot
          key={`dot${i}`}
          index={i}
          isSelected={i === currentPage}
          backgroundColor={backgroundColor}
          handleDotClick={handleDotClick}
        />
      );
    }
    return dotList;
  }

  render() {
    const dotList = this.getDotList();
    return <div className={styles['slider-dots']}>{dotList}</div>;
  }
}
