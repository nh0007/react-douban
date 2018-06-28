import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BookTagsItem from '../BookTagsItem';
import styles from './bookTagsList.scss';

export default class BookTagsList extends PureComponent {
  static propTypes = {
    bookTags: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentBookTags: PropTypes.shape({
      tagName: PropTypes.string.isRequired
    }).isRequired,
    handleClick: PropTypes.func.isRequired
  };

  render() {
    const { bookTags, currentBookTags, handleClick } = this.props;
    return (
      <ul className={styles['tags-list']}>
        {bookTags.map(tagObject => (
          <BookTagsItem
            key={tagObject.tagName}
            tagObject={tagObject}
            isSelected={currentBookTags.tagName === tagObject.tagName}
            handleClick={handleClick}
          />
        ))}
      </ul>
    );
  }
}
