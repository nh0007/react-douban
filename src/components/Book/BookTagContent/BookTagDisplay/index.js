import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import CommonSlider from '../../../Common/CommonSlider';
import BookTagDisplayList from '../BookTagDisplayList';
import BookTagPrompt from '../BookTagPrompt';
import styles from './bookTagDisplay.scss';

@observer
export default class BookTagDisplay extends Component {
  static propTypes = {
    currentBookTag: PropTypes.string.isRequired,
    bookList: PropTypes.arrayOf(PropTypes.array).isRequired,
    position: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
      top: PropTypes.number,
      left: PropTypes.number
    }).isRequired
  };

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

  @action
  setBookPrompt = (book, index) => {
    this.bookPrompt = { book, index };
  };

  pageCount = 0;
  @observable currentPage = 0;
  @observable currentDirection = 'right';
  @observable bookPrompt = null;

  handleDotClick = page => {
    if (page === this.currentPage) return;
    if (page < this.currentPage) {
      this.setCurrentDirection('left');
    } else {
      this.setCurrentDirection('right');
    }
    this.setCurrentPage(page);
  };

  handleArrowClick = direction => {
    this.setCurrentDirection(direction);
    let newPage = 0;
    if (direction === 'left') {
      newPage =
        this.currentPage === 0 ? this.pageCount - 1 : this.currentPage - 1;
    } else {
      newPage =
        this.currentPage === this.pageCount - 1 ? 0 : this.currentPage + 1;
    }
    this.setCurrentPage(newPage);
  };

  render() {
    const { currentBookTag, bookList, position } = this.props;
    this.pageCount = bookList.length;
    return (
      <div>
        <div className={styles['display-header']}>
          <h2 className={styles['display-title']}>{currentBookTag}</h2>
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

        <BookTagDisplayList
          currentPage={this.currentPage}
          currentDirection={this.currentDirection}
          bookList={bookList}
          setBookPrompt={this.setBookPrompt}
        />
        {this.bookPrompt &&
          this.bookPrompt.book && (
            <BookTagPrompt bookPrompt={this.bookPrompt} position={position} />
          )}
      </div>
    );
  }
}
