import React, { Component } from 'react';
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import { Facebook as Loading } from 'react-content-loader';
import BookTagDisplay from './BookTagDisplay';
import BookTag from '../BookTag';
import { processedArray, getContentPosition } from '../../../utils/utils';
import styles from './bookTagContent.scss';

@inject('bookStore')
@observer
export default class BookTagContent extends Component {
  static propTypes = {
    bookStore: PropTypes.shape({
      bookTags: PropTypes.arrayOf(PropTypes.object).isRequired,
      currentBookTags: PropTypes.object.isRequired,
      currentBookTag: PropTypes.string.isRequired,
      displayContentPosition: PropTypes.object,
      tagBooks: mobxPropTypes.observableMap.isRequired,
      setCurrentBookTags: PropTypes.func.isRequired,
      setCurrentBookTag: PropTypes.func.isRequired,
      setTagBooks: PropTypes.func.isRequired,
      setDisplayContentPosition: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount() {
    const {
      displayContentPosition,
      setDisplayContentPosition,
      currentBookTag,
      setTagBooks
    } = this.props.bookStore;
    // 获取数据
    setTagBooks(currentBookTag);
    // 获取容器位置，用于设置'BookTagPrompt'组件显示位置
    if (!displayContentPosition) {
      setDisplayContentPosition(getContentPosition(this.bookRef));
    }
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

  setBookRef = el => {
    this.bookRef = el;
  };

  bookRef = null;

  render() {
    const {
      bookTags,
      currentBookTags,
      currentBookTag,
      displayContentPosition,
      setCurrentBookTags,
      setCurrentBookTag,
      setTagBooks
    } = this.props.bookStore;
    const bookList = this.getBookList();

    return (
      <div>
        <div className={styles['display-content']} ref={this.setBookRef}>
          {bookList.length !== 0 ? (
            <BookTagDisplay
              currentBookTag={currentBookTag}
              bookList={bookList}
              position={displayContentPosition}
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
