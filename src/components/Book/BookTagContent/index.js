import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import BookTag from '../BookTag';

@inject('bookStore')
@observer
export default class BookTagContent extends Component {
  static propTypes = {
    bookStore: PropTypes.shape({
      bookTags: PropTypes.arrayOf(PropTypes.object).isRequired,
      currentBookTags: PropTypes.object.isRequired,
      currentBookTag: PropTypes.string.isRequired,
      setCurrentBookTags: PropTypes.func.isRequired,
      setCurrentBookTag: PropTypes.func.isRequired,
      setTagBooks: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    const {
      bookTags,
      currentBookTags,
      currentBookTag,
      setCurrentBookTags,
      setCurrentBookTag,
      setTagBooks
    } = this.props.bookStore;

    return (
      <div>
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
