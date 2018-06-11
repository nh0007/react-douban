import React, { PureComponent } from 'react';
import { observable, action } from 'mobx';
import PropTypes from 'prop-types';
import { processedAuthor } from '../../../utils/utils';
import styles from './headerSuggest.scss';

export default class HeaderSuggest extends PureComponent {
  static propTypes = {
    searchData: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFocusOnInput: PropTypes.bool.isRequired
  };

  @action
  setIsFocusOnList = isFocus => {
    this.isFocusOnList = isFocus;
  };

  @observable isFocusOnList = false;

  render() {
    const { isFocusOnInput, searchData } = this.props;

    return (
      <ul
        className={styles['search-suggest']}
        style={{
          display: this.isFocusOnList || isFocusOnInput ? 'block' : 'none'
        }}
        onMouseEnter={() => this.setIsFocusOnList(true)}
        onMouseLeave={() => this.setIsFocusOnList(false)}
      >
        {searchData.map(item => (
          <li key={item.id}>
            <a className={styles['search-link']} href={item.alt}>
              <img
                className={styles['search-image']}
                src={item.image || item.images.small}
                alt={item.title}
                referrerPolicy="no-referrer"
              />

              <h3 className={styles['search-title']}>{item.title}</h3>

              {item.pubdate && <span>{item.pubdate}</span>}
              {item.year && <span>{item.year}</span>}
              {item.author && (
                <p className={styles['search-author']}>
                  {processedAuthor(item.author)}
                </p>
              )}
              {item.genres && (
                <p className={styles['search-genres']}>{item.genres.join()}</p>
              )}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
