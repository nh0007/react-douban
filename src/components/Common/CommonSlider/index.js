import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CommonSliderDots from './CommonSliderDots';
import CommonSliderArrows from './CommonSliderArrows';

export default class CommonSlider extends PureComponent {
  static propTypes = {
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    handleDotClick: PropTypes.func.isRequired,
    handleArrowClick: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string
  };

  static defaultProps = {
    backgroundColor: '#9b9a8e'
  };

  render() {
    const {
      pageCount,
      currentPage,
      handleDotClick,
      handleArrowClick,
      backgroundColor
    } = this.props;
    return (
      <div>
        <CommonSliderDots
          pageCount={pageCount}
          currentPage={currentPage}
          handleDotClick={handleDotClick}
          backgroundColor={backgroundColor}
        />
        <CommonSliderArrows
          handleArrowClick={handleArrowClick}
          backgroundColor={backgroundColor}
        />
      </div>
    );
  }
}
