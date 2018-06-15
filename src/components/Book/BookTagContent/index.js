import React, { Component } from 'react';
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import BookTagMainContent from './BookTagMainContent';
import BookTag from '../BookTag';

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
    const currentTagBooks = tagBooks.get(currentBookTag);

    return (
      <div>
        {currentTagBooks && (
          <BookTagMainContent
            currentBookTag={currentBookTag}
            currentTagBooks={currentTagBooks}
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
