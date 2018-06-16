import React, { Component } from 'react';
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import BookTagMainContent from './BookTagMainContent';
import BookTag from '../BookTag';
import { processedArray } from '../../../utils/utils';

@inject('bookStore')
@observer
export default class BookTagContent extends Component {
  static propTypes = {
    bookStore: PropTypes.shape({
      bookTags: PropTypes.arrayOf(PropTypes.object).isRequired,
      currentBookTags: PropTypes.object.isRequired,
      currentBookTag: PropTypes.string.isRequired,
      tagBooks: mobxPropTypes.observableMap.isRequired,
      setCurrentBookTags: PropTypes.func.isRequired,
      setCurrentBookTag: PropTypes.func.isRequired,
      setTagBooks: PropTypes.func.isRequired
    }).isRequired
  };

  componentWillMount() {
    const { currentBookTag, setTagBooks } = this.props.bookStore;
    setTagBooks(currentBookTag);
  }

  getBookList() {
    const { tagBooks, currentBookTag } = this.props.bookStore;
    const currentTagBooks = tagBooks.get(currentBookTag);
    let bookList = [];
    if (currentTagBooks) {
      bookList = processedArray(currentTagBooks, 10);
    }
    return bookList;
  }

  render() {
    const {
      bookTags,
      currentBookTags,
      currentBookTag,
      setCurrentBookTags,
      setCurrentBookTag,
      setTagBooks
    } = this.props.bookStore;
    const bookList = this.getBookList();

    return (
      <div>
        {bookList.length !== 0 && (
          <BookTagMainContent
            currentBookTag={currentBookTag}
            bookList={bookList}
          />
        )}

        <BookTag
          bookTags={bookTags}
          currentBookTags={currentBookTags}
          currentBookTag={currentBookTag}
          setCurrentBookTags={setCurrentBookTags}
          setCurrentBookTag={setCurrentBookTag}
          setTagBooks={setTagBooks}
        />
      </div>
    );
  }
}
