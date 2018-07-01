import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import CommonSlider from '../../../Common/CommonSlider';
import MovieTagDisplayList from '../MovieTagDisplayList';
import styles from './movieTagDisplay.scss';

@observer
export default class MovieTagDisplay extends Component {
  static propTypes = {
    currentMovieTag: PropTypes.string.isRequired,
    movieList: PropTypes.arrayOf(PropTypes.array).isRequired
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

  pageCount = 0;
  @observable currentPage = 0;
  @observable currentDirection = 'right';

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
    const { currentMovieTag, movieList } = this.props;
    this.pageCount = movieList.length;
    return (
      <div>
        <div className={styles['display-header']}>
          <h2 className={styles['display-title']}>{currentMovieTag}</h2>

          <div className={styles['slider-component']}>
            <CommonSlider
              pageCount={this.pageCount}
              currentPage={this.currentPage}
              handleDotClick={this.handleDotClick}
              handleArrowClick={this.handleArrowClick}
              backgroundColor="#6d98d2"
            />
          </div>
        </div>

        <MovieTagDisplayList
          currentPage={this.currentPage}
          currentDirection={this.currentDirection}
          movieList={movieList}
        />
      </div>
    );
  }
}
