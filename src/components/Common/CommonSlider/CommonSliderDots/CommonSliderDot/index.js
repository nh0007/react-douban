import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './commonSliderDot.scss';

export default class CommonSliderDot extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    handleDotClick: PropTypes.func.isRequired
  };

  handleClick = () => {
    const { index, handleDotClick } = this.props;
    handleDotClick(index);
  };

  render() {
    const { isSelected, backgroundColor } = this.props;
    return (
      <span
        role="button"
        tabIndex={0}
        className={styles['slider-dot']}
        style={{ background: isSelected ? backgroundColor : '#dfdfdf' }}
        onClick={this.handleClick}
      />
    );
  }
}
