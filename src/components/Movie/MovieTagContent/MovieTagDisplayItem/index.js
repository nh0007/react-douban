import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './movieTagDisplayItem.scss';

export default class MovieTagDisplayItem extends PureComponent {
  static propTypes = {
    isShow: PropTypes.bool.isRequired,
    currentDirection: PropTypes.string.isRequired,
    movieArray: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { isShow, currentDirection, movieArray } = this.props;
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

              <p className={styles['movie-score']}>
                评分：
                <span>{movie.rating.average}</span>
              </p>

              <p className={styles['movie-year']}>上映时间：{movie.year}</p>
            </li>
          ))}
        </ul>
      </CSSTransition>
    );
  }
}
