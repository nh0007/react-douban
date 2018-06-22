import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CommonTagList from '../../../Common/CommonTagList';
import styles from './movieTag.scss';

export default class MovieTag extends PureComponent {
  static propTypes = {
    movieTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentMovieTag: PropTypes.string.isRequired,
    setCurrentMovieTag: PropTypes.func.isRequired,
    setTagMovies: PropTypes.func.isRequired
  };

  handleClick = tag => {
    const { setCurrentMovieTag, setTagMovies } = this.props;
    setCurrentMovieTag(tag);
    setTagMovies(tag);
  };

  render() {
    const { movieTags, currentMovieTag } = this.props;
    return (
      <aside className={styles['aside-content']}>
        <h2 className={styles['aside-header']}>电影分类</h2>

        <CommonTagList
          tagList={movieTags}
          currentTag={currentMovieTag}
          handleClick={this.handleClick}
          activeTagClass="movie-tag-active"
          hoverTagClass="movie-tag-hover"
        />
      </aside>
    );
  }
}
