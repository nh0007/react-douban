import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import CommonSlider from '../../../Common/CommonSlider';
import { processedArray } from '../../../../utils/utils';
import styles from './bookTagMainContent.scss';

@observer
export default class BookTagMainContent extends Component {
  static propTypes = {
    currentBookTag: PropTypes.string.isRequired,
    currentTagBooks: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  getBookList() {
    const { currentTagBooks } = this.props;
    let bookList = [];
    if (currentTagBooks) {
      bookList = processedArray(currentTagBooks, 10);
    }
    return bookList;
  }

  @action
  setCurrentPage = page => {
    if (page !== this.currentPage) {
      this.currentPage = page;
    }
  };

  @action
  setCurrentDirection = direction => {
    if (direction !== this.currentDirection) {
      this.currentDirection = direction;
    }
  };

  pageCount = 0;
  @observable currentPage = 0;
  @observable currentDirection = 'left';

  handleDotClick = page => {
    this.setCurrentPage(page);
    if (page === this.currentPage) return;
    if (page < this.currentPage) {
      this.setCurrentDirection('left');
    } else {
      this.setCurrentDirection('right');
    }
  };

  handleArrowClick = direction => {
    let newPage = 0;
    if (direction === 'left') {
      newPage =
        this.currentPage === 0 ? this.pageCount - 1 : this.currentPage - 1;
    } else {
      newPage =
        this.currentPage === this.pageCount - 1 ? 0 : this.currentPage + 1;
    }
    this.setCurrentPage(newPage);
    this.setCurrentDirection(direction);
  };

  render() {
    const { currentBookTag } = this.props;
    const bookList = this.getBookList();
    this.pageCount = bookList.length;
    return (
      <div className={styles['main-content']}>
        <div className={styles['main-header']}>
          <h2 className={styles['main-title']}>{currentBookTag}</h2>
          <NavLink to="book-tag-more-info" className={styles['nav-link']}>
            更多»
          </NavLink>

          <div className={styles['slider-component']}>
            <CommonSlider
              pageCount={this.pageCount}
              currentPage={this.currentPage}
              handleDotClick={this.handleDotClick}
              handleArrowClick={this.handleArrowClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
