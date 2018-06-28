import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BookTagDisplayItem from '../BookTagDisplayItem';
import styles from './bookTagDisplayList.scss';

export default class BookTagDisplayList extends PureComponent {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    currentDirection: PropTypes.string.isRequired,
    bookList: PropTypes.arrayOf(PropTypes.array).isRequired,
    setBookPrompt: PropTypes.func.isRequired
  };

  render() {
    const {
      currentPage,
      currentDirection,
      bookList,
      setBookPrompt
    } = this.props;
    return (
      <div className={styles['book-list']}>
        {bookList.map((bookArray, index) => (
          <BookTagDisplayItem
            key={bookArray[0].id}
            isShow={currentPage === index}
            currentDirection={currentDirection}
            bookArray={bookArray}
            setBookPrompt={setBookPrompt}
          />
        ))}
      </div>
    );
  }
}
