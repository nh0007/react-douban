import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './commonTagItem.scss';

export default class CommonTagItem extends PureComponent {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    activeTagClass: PropTypes.string.isRequired,
    hoverTagClass: PropTypes.string.isRequired
  };

  render() {
    const {
      tag,
      isSelected,
      handleClick,
      activeTagClass,
      hoverTagClass
    } = this.props;
    const selectClass = isSelected ? activeTagClass : '';

    return (
      <li className={`${styles['tag-item']}`}>
        <button
          className={`${hoverTagClass} ${selectClass}`}
          onClick={() => handleClick(tag)}
        >
          {tag}
        </button>
      </li>
    );
  }
}
