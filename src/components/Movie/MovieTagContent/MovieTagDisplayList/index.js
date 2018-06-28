import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MovieTagDisplayItem from '../MovieTagDisplayItem';
import styles from './movieTagDisplayList.scss';

export default class MovieTagDisplayList extends PureComponent {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    currentDirection: PropTypes.string.isRequired,
    movieList: PropTypes.arrayOf(PropTypes.array).isRequired
  };

  render() {
    const { currentPage, currentDirection, movieList } = this.props;
    return (
      <div className={styles['movie-list']}>
        {movieList.map((movieArray, index) => (
          <MovieTagDisplayItem
            key={movieArray[0].id}
            isShow={index === currentPage}
            currentDirection={currentDirection}
            movieArray={movieArray}
          />
        ))}
      </div>
    );
  }
}
