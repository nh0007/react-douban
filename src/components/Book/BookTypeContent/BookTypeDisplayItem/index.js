import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getStarStyle, getTagString } from '../../../../utils/utils';
import styles from './bookTypeDisplayItem.scss';

export default class BookTypeDisplayItem extends PureComponent {
  static propTypes = {
    book: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      images: PropTypes.object.isRequired,
      rating: PropTypes.object.isRequired,
      author: PropTypes.array.isRequired,
      publisher: PropTypes.string.isRequired,
      pubdate: PropTypes.string.isRequired,
      pages: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      binding: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired
    }).isRequired
  };

  render() {
    const { book } = this.props;
    return (
      <li className={styles['book-item']}>
        <a href={book.alt} title={book.title}>
          <img
            src={book.images.large}
            alt={book.title}
            className={styles['book-image']}
            referrerPolicy="no-referrer"
          />
        </a>

        <div className={styles['book-more-info']}>
          <h3 className={styles['book-title']}>
            <a href={book.alt}>{book.title}</a>
          </h3>

          <p>
            <span
              className={styles['score-image']}
              style={getStarStyle(book.rating.average)}
            />
            <span className={styles['average-score']}>
              {book.rating.average}
            </span>
          </p>

          <p>作者 : {book.author.join()}</p>
          <p>{`${book.publisher}  /  ${book.pubdate}`}</p>
          <p className={styles['book-details']}>
            {`${book.pages}页  /  ${book.price}元  /  ${book.binding}`}
          </p>
          <p>标签 : {getTagString(book.tags)}</p>
        </div>
      </li>
    );
  }
}
