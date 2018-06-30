import React, { Component } from 'react';
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import { Facebook as Loading } from 'react-content-loader';
import BookTagMoreDisplay from './BookTagMoreDisplay';
import BookTag from '../BookTag';
import styles from './bookTagMoreContent.scss';

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

  componentDidMount() {
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
        <div className={styles['display-content']}>
          {bookList ? (
            <BookTagMoreDisplay
              currentBookTag={currentBookTag}
              bookList={bookList}
              setTagBooks={setTagBooks}
            />
          ) : (
            <Loading speed="1" primaryColor="#f6f6f1" />
          )}
        </div>

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
