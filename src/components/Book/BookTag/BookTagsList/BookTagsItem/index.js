import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './bookTagsItem.scss';

export default class BookTagsItem extends PureComponent {
  static propTypes = {
    tagObject: PropTypes.shape({
      tagName: PropTypes.string.isRequired
    }).isRequired,
    isSelected: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
  };

  render() {
    const { tagObject, isSelected, handleClick } = this.props;
    const selectClass = isSelected ? styles['selected-item'] : '';
    return (
      <li className={`${styles['tags-item']} ${selectClass}`}>
        <button onClick={() => handleClick(tagObject)}>
          {tagObject.tagName}
        </button>
      </li>
    );
  }
}
