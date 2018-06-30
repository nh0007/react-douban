import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Facebook as Loading } from 'react-content-loader';
import MusicTag from './MusicTag';
import MusicDisplay from './MusicDisplay';

@inject('musicStore')
@observer
export default class MusicTagContent extends Component {
  static propTypes = {
    musicStore: PropTypes.shape({
      musicTags: PropTypes.arrayOf(PropTypes.string).isRequired,
      currentMusicTag: PropTypes.string.isRequired,
      currentTagMusicList: PropTypes.arrayOf(PropTypes.object).isRequired,
      setCurrentMusicTag: PropTypes.func.isRequired,
      setTagMusics: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount() {
    const { currentMusicTag, setTagMusics } = this.props.musicStore;
    setTagMusics(currentMusicTag);
  }

  render() {
    const {
      musicTags,
      currentMusicTag,
      currentTagMusicList,
      setCurrentMusicTag,
      setTagMusics
    } = this.props.musicStore;
    return (
      <div>
        <MusicTag
          musicTags={musicTags}
          currentMusicTag={currentMusicTag}
          setCurrentMusicTag={setCurrentMusicTag}
          setTagMusics={setTagMusics}
        />
        {currentTagMusicList.length !== 0 ? (
          <MusicDisplay musicList={currentTagMusicList} />
        ) : (
          <Loading
            speed="1"
            primaryColor="#f0f3ef"
            style={{ marginTop: '16px' }}
            width="500"
            height="165"
          />
        )}
      </div>
    );
  }
}
