import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './bookTagDisplayItem.scss';

export default class BookTagDisplayItem extends PureComponent {
  static propTypes = {
    isShow: PropTypes.bool.isRequired,
    currentDirection: PropTypes.string.isRequired,
    bookArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    setBookPrompt: PropTypes.func.isRequired
  };

  onMouseChange = (bookObject, index) => {
    const { setBookPrompt } = this.props;
    setBookPrompt(bookObject, index);
  };

  render() {
    const { isShow, currentDirection, bookArray } = this.props;
    return (
      <CSSTransition
        in={isShow}
        timeout={500}
        classNames={`slider-${currentDirection}`}
        unmountOnExit
      >
        <ul className={styles['book-page']}>
          {bookArray.map((book, index) => (
            <li key={book.id}>
              <a href={book.alt} title={book.title}>
                <img
                  src={book.images.large}
                  alt={book.title}
                  className={styles['book-image']}
                  referrerPolicy="no-referrer"
                  onMouseEnter={() => this.onMouseChange(book, index)}
                  onMouseLeave={() => this.onMouseChange(null)}
                />
              </a>

              <h3 className={styles['book-title']}>
                <a href={book.alt} title={book.title}>
                  {book.title}
                </a>
              </h3>

              <p className={styles['book-author']}>{book.author.join()}</p>
            </li>
          ))}
        </ul>
      </CSSTransition>
    );
  }
}
