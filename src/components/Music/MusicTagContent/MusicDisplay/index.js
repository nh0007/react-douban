import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getSongArray } from '../../../../utils/utils';
import styles from './musicDisplay.scss';

export default class MusicDisplay extends PureComponent {
  static propTypes = {
    musicList: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { musicList } = this.props;
    return (
      <ul className={styles['music-list']}>
        {musicList.map(music => (
          <li key={music.id}>
            <div className={styles['music-cover']}>
              <img
                src={music.image}
                alt={music.title}
                className={styles['music-image']}
                referrerPolicy="no-referrer"
              />
              <a className={styles['music-hover']} href={music.alt}>
                {getSongArray(music.attrs.tracks[0]).map(song => (
                  <p key={song}>{song}</p>
                ))}
              </a>

              <span className={styles['outer-play-btn']}>
                <i className={styles['inner-play-btn']} />
              </span>
            </div>

            <p className={styles['music-singer']}>
              {music.attrs.singer.join()}
            </p>
            <p className={styles['music-title']}>
              <a
                href={music.alt}
                className={styles['music-link']}
                title={music.title}
              >
                {music.title}
              </a>
            </p>
          </li>
        ))}
      </ul>
    );
  }
}
