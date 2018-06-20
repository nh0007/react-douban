import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DisplayItem from './DisplayItem';
import styles from './displayList.scss';

export default class DisplayList extends PureComponent {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    currentDirection: PropTypes.string.isRequired,
    movieList: PropTypes.arrayOf(PropTypes.array).isRequired,
    currentMovieType: PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    setSelectedMovie: PropTypes.func.isRequired
  };

  render() {
    const {
      currentPage,
      currentDirection,
      movieList,
      currentMovieType,
      setSelectedMovie
    } = this.props;
    return (
      <div className={styles['movie-list']}>
        {movieList.map((movieArray, index) => (
          <DisplayItem
            key={movieArray[0].id}
            isShow={currentPage === index}
            currentDirection={currentDirection}
            movieArray={movieArray}
            currentMovieType={currentMovieType}
            setSelectedMovie={setSelectedMovie}
          />
        ))}
      </div>
    );
  }
}
