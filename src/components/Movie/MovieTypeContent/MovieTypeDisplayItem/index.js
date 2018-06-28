import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { getStarStyle } from '../../../../utils/utils';
import styles from './movieTypeDisplayItem.scss';

export default class MovieTypeDisplayItem extends PureComponent {
  static propTypes = {
    isShow: PropTypes.bool.isRequired,
    currentDirection: PropTypes.string.isRequired,
    movieArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentMovieType: PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    setSelectedMovie: PropTypes.func.isRequired
  };

  render() {
    const {
      isShow,
      currentDirection,
      movieArray,
      currentMovieType,
      setSelectedMovie
    } = this.props;
    return (
      <CSSTransition
        in={isShow}
        timeout={500}
        classNames={`slider-${currentDirection}`}
        unmountOnExit
      >
        <ul className={styles['movie-page']}>
          {movieArray.map(movie => (
            <li key={movie.id}>
              <a href={movie.alt} title={movie.title}>
                <img
                  src={movie.images.large}
                  alt={movie.title}
                  className={styles['movie-image']}
                />
              </a>

              <h3 className={styles['movie-title']}>
                <a href={movie.alt} title={movie.title}>
                  {movie.title}
                </a>
              </h3>

              {movie.rating.average === 0 ? (
                <p>暂无评分</p>
              ) : (
                <p>
                  <span
                    className={styles['score-image']}
                    style={getStarStyle(movie.rating.average)}
                  />
                  <span className={styles['average-score']}>
                    {movie.rating.average}
                  </span>
                </p>
              )}
              {currentMovieType.value === 'in_theaters' ? (
                <button
                  className={styles['buy-ticket']}
                  onClick={() => setSelectedMovie(movie)}
                >
                  选座购票
                </button>
              ) : (
                <p className={styles['movie-genres']}>
                  类型:{' '}
                  {movie.genres.length === 0
                    ? '暂无'
                    : movie.genres.join(' / ')}
                </p>
              )}
            </li>
          ))}
        </ul>
      </CSSTransition>
    );
  }
}
