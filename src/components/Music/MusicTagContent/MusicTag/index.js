import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MusicTagItem from '../MusicTagItem';
import styles from './musicTag.scss';

export default class MusicTag extends PureComponent {
  static propTypes = {
    musicTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentMusicTag: PropTypes.string.isRequired,
    setCurrentMusicTag: PropTypes.func.isRequired,
    setTagMusics: PropTypes.func.isRequired
  };

  handleClick = tag => {
    const { setCurrentMusicTag, setTagMusics } = this.props;
    setCurrentMusicTag(tag);
    setTagMusics(tag);
  };

  render() {
    const { musicTags, currentMusicTag } = this.props;
    return (
      <ul className={styles['music-tag-list']}>
        {musicTags.map(tag => (
          <MusicTagItem
            key={tag}
            tag={tag}
            isSelected={tag === currentMusicTag}
            handleClick={this.handleClick}
          />
        ))}
      </ul>
    );
  }
}
