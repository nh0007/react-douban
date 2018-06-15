import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './commonSliderArrows.scss';

export default class CommonSliderArrows extends PureComponent {
  static propTypes = {
    handleArrowClick: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string.isRequired
  };

  handleLeftBtnClick = () => {
    const { handleArrowClick } = this.props;
    handleArrowClick('left');
  };

  handleRightBtnClick = () => {
    const { handleArrowClick } = this.props;
    handleArrowClick('right');
  };

  render() {
    return (
      <div className={styles['slider-arrows']}>
        <span
          role="button"
          tabIndex={0}
          className={styles['slider-arrow']}
          style={{ background: this.props.backgroundColor }}
          onClick={this.handleLeftBtnClick}
        >
          ‹
        </span>

        <span
          role="button"
          tabIndex={0}
          className={styles['slider-arrow']}
          style={{ background: this.props.backgroundColor }}
          onClick={this.handleRightBtnClick}
        >
          ›
        </span>
      </div>
    );
  }
}
