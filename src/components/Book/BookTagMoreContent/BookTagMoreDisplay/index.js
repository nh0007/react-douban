import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import BookTagMoreDisplayList from '../BookTagMoreDisplayList';
import LoadMoreBooks from '../LoadMoreBooks';
import styles from './bookTagMoreDisplay.scss';

@observer
export default class BookTagMoreDisplay extends Component {
  static propTypes = {
    currentBookTag: PropTypes.string.isRequired,
    bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
    setTagBooks: PropTypes.func.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentBookTag !== this.props.currentBookTag) {
      this.setPageCount(10);
    }
  }

  @action
  setPageCount = (count, growth) => {
    if (count) {
      this.pageCount = count;
    } else {
      this.pageCount += growth;
    }
    const { currentBookTag, bookList, setTagBooks } = this.props;
    const { length } = bookList;
    if (this.pageCount > length) {
      setTagBooks(
        currentBookTag,
        this.pageCount,
        this.pageCount - length,
        true,
        true
      );
    }
  };

  @observable pageCount = 10;

  render() {
    const { currentBookTag, bookList } = this.props;
    const newBookList = bookList.slice(0, this.pageCount);
    return (
      <div>
        <div className={styles['display-header']}>
          <h2>豆瓣读书标签: {currentBookTag}</h2>
        </div>

        <BookTagMoreDisplayList bookList={newBookList} />
        <LoadMoreBooks setPageCount={this.setPageCount} />
      </div>
    );
  }
}
