import React, { Component } from 'react';
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import Display from './Display';
import BookTag from '../BookTag';

@inject('bookStore')
@observer
export default class BookTagMoreContent extends Component {
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

  render() {
    const {
      bookTags,
      currentBookTags,
      currentBookTag,
      tagBooks,
      setCurrentBookTags,
      setCurrentBookTag,
      setTagBooks
    } = this.props.bookStore;
    const bookList = tagBooks.get(currentBookTag);
    return (
      <div>
        {bookList && (
          <Display
            currentBookTag={currentBookTag}
            bookList={bookList}
            setTagBooks={setTagBooks}
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
