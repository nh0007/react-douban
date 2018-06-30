import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Facebook as Loading } from 'react-content-loader';
import MovieTagDisplay from './MovieTagDisplay';
import MovieTag from './MovieTag';
import styles from './movieTagContent.scss';

@inject('movieStore')
@observer
export default class MovieTagContent extends Component {
  static propTypes = {
    movieStore: PropTypes.shape({
      movieTags: PropTypes.arrayOf(PropTypes.string).isRequired,
      currentMovieTag: PropTypes.string.isRequired,
      currentTagMovieList: PropTypes.arrayOf(PropTypes.array).isRequired,
      setCurrentMovieTag: PropTypes.func.isRequired,
      setTagMovies: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount() {
    const { currentMovieTag, setTagMovies } = this.props.movieStore;
    setTagMovies(currentMovieTag);
  }

  pageCount = 0;

  render() {
    const {
      movieTags,
      currentMovieTag,
      currentTagMovieList,
      setCurrentMovieTag,
      setTagMovies
    } = this.props.movieStore;
    this.pageCount = currentTagMovieList.length;
    return (
      <div>
        <div className={styles['display-content']}>
          {this.pageCount !== 0 ? (
            <MovieTagDisplay
              currentMovieTag={currentMovieTag}
              movieList={currentTagMovieList}
            />
          ) : (
            <Loading speed="1" primaryColor="#f0f3f5" />
          )}
        </div>

        <MovieTag
          movieTags={movieTags}
          currentMovieTag={currentMovieTag}
          setCurrentMovieTag={setCurrentMovieTag}
          setTagMovies={setTagMovies}
        />
      </div>
    );
  }
}
