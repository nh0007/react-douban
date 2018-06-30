import React, { Component } from 'react';
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import { Facebook as Loading } from 'react-content-loader';
import BookTypeDisplayList from './BookTypeDisplayList';
import styles from './bookTypeContent.scss';

@inject('bookStore')
@observer
export default class BookTypeContent extends Component {
  static propTypes = {
    bookStore: PropTypes.shape({
      bookTypes: PropTypes.array.isRequired,
      currentBookType: PropTypes.string.isRequired,
      typeBooks: mobxPropTypes.observableMap.isRequired,
      setCurrentBookType: PropTypes.func.isRequired,
      setTypeBooks: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount() {
    const { currentBookType, setTypeBooks } = this.props.bookStore;
    setTypeBooks(currentBookType);
  }

  handleClick = type => {
    const { setCurrentBookType, setTypeBooks } = this.props.bookStore;
    setCurrentBookType(type);
    setTypeBooks(type);
  };

  render() {
    const { bookTypes, currentBookType, typeBooks } = this.props.bookStore;
    const bookList = typeBooks.get(currentBookType);
    return (
      <div>
        <div className={styles['display-header']}>
          <h2 className={styles['display-title']}>最受关注图书榜</h2>
          {bookTypes.map(type => (
            <span
              key={type}
              role="button"
              tabIndex={0}
              className={`${styles['type-link']} ${
                type === currentBookType
                  ? styles['in-active']
                  : styles['not-active']
              }`}
              onClick={() => this.handleClick(type)}
            >
              {type}
            </span>
          ))}
        </div>

        {bookList ? (
          <BookTypeDisplayList bookList={bookList} />
        ) : (
          <Loading speed="1" primaryColor="#f6f6f1" width="500" height="165" />
        )}
      </div>
    );
  }
}
