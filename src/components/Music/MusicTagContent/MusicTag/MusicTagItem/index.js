import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import styles from './musicTagItem.scss';

export default class MusicTagItem extends PureComponent {
  static propTypes = {
    tag: Proptypes.string.isRequired,
    isSelected: Proptypes.bool.isRequired,
    handleClick: Proptypes.func.isRequired
  };

  render() {
    const { tag, isSelected, handleClick } = this.props;
    return (
      <li className={styles['music-tag-item']}>
        <span
          role="button"
          tabIndex={0}
          className={isSelected ? styles['in-active'] : styles['not-active']}
          onClick={() => handleClick(tag)}
        >
          {tag}
        </span>
      </li>
    );
  }
}
