import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BookTagsList from './BookTagsList';
import CommonTagList from '../../Common/CommonTagList';
import styles from './bookTag.scss';

export default class BookTag extends PureComponent {
  static propTypes = {
    bookTags: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentBookTags: PropTypes.shape({
      tagName: PropTypes.string.isRequired
    }).isRequired,
    currentBookTag: PropTypes.string.isRequired,
    setCurrentBookTags: PropTypes.func.isRequired,
    setCurrentBookTag: PropTypes.func.isRequired,
    setTagBooks: PropTypes.func.isRequired
  };

  handleTagsClick = tags => {
    const { setCurrentBookTags, setCurrentBookTag, setTagBooks } = this.props;
    setCurrentBookTags(tags);
    setCurrentBookTag(tags.subTags[0]);
    setTagBooks(tags.subTags[0]);
  };

  handleSubTagClick = tag => {
    const { setCurrentBookTag, setTagBooks } = this.props;
    setCurrentBookTag(tag);
    setTagBooks(tag);
  };

  render() {
    const { bookTags, currentBookTags, currentBookTag } = this.props;

    return (
      <aside className={styles['aside-content']}>
        <h2 className={styles['aside-header']}>书籍标签</h2>
        <BookTagsList
          bookTags={bookTags}
          currentBookTags={currentBookTags}
          handleClick={this.handleTagsClick}
        />

        <CommonTagList
          tagList={currentBookTags.subTags}
          currentTag={currentBookTag}
          handleClick={this.handleSubTagClick}
          activeTagClass="book-tag-active"
          hoverTagClass="book-tag-hover"
        />
      </aside>
    );
  }
}
