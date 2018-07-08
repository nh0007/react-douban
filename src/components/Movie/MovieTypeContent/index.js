import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Facebook as Loading } from 'react-content-loader';
import CommonSlider from '../../Common/CommonSlider';
import MovieModal from './MovieModal';
import MovieTypeDisplayList from './MovieTypeDisplayList';
import styles from './movieTypeContent.scss';

@inject('movieStore')
@observer
export default class MovieTypeContent extends Component {
  static propTypes = {
    movieStore: PropTypes.shape({
      movieTypes: PropTypes.array.isRequired,
      currentMovieType: PropTypes.object.isRequired,
      currentTypeMovieList: PropTypes.array.isRequired,
      setCurrentMovieType: PropTypes.func.isRequired,
      setTypeMovies: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount() {
    const { currentMovieType, setTypeMovies } = this.props.movieStore;
    setTypeMovies(currentMovieType);
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

  @action
  setSelectedMovie = movie => {
    if (movie !== this.selectedMovie) {
      this.selectedMovie = movie;
    }
    this.showModal();
  };

  @action
  setIsShowModal = isShow => {
    if (isShow !== this.isShowModal) {
      this.isShowModal = isShow;
    }
  };

  showModal = () => {
    this.setIsShowModal(true);
  };

  hideModal = () => {
    this.setIsShowModal(false);
  };

  handleTypeClick = type => {
    this.setCurrentPage(0);
    const { setCurrentMovieType, setTypeMovies } = this.props.movieStore;
    setCurrentMovieType(type);
    setTypeMovies(type);
  };

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

  pageCount = 0;
  @observable currentPage = 0;
  @observable currentDirection = 'right';
  @observable selectedMovie = { title: '' };
  @observable isShowModal = false;

  render() {
    const {
      movieTypes,
      currentMovieType,
      currentTypeMovieList
    } = this.props.movieStore;
    this.pageCount = currentTypeMovieList.length;

    return (
      <div>
        <div className={styles['display-header']}>
          <h2 className={styles['display-title']}>{currentMovieType.text}</h2>
          {movieTypes.map(type => (
            <span
              key={type.value}
              role="button"
              tabIndex={0}
              className={`${styles['type-link']} ${
                type.value === currentMovieType.value
                  ? styles['in-active']
                  : styles['not-active']
              }`}
              onClick={() => this.handleTypeClick(type)}
            >
              {type.text}»
            </span>
          ))}
          <div className={styles['slider-component']}>
            {this.pageCount !== 0 && (
              <CommonSlider
                pageCount={this.pageCount}
                currentPage={this.currentPage}
                handleDotClick={this.handleDotClick}
                handleArrowClick={this.handleArrowClick}
                backgroundColor="#6d98d2"
              />
            )}
          </div>
        </div>

        {this.pageCount !== 0 ? (
          <MovieTypeDisplayList
            currentPage={this.currentPage}
            currentDirection={this.currentDirection}
            movieList={currentTypeMovieList}
            currentMovieType={currentMovieType}
            setSelectedMovie={this.setSelectedMovie}
          />
        ) : (
          <Loading speed="1" primaryColor="#f0f3f5" width="500" height="165" />
        )}

        <MovieModal
          selectedMovie={this.selectedMovie}
          isShowModal={this.isShowModal}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}
