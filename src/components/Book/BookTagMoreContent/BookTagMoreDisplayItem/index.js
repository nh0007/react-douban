import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getStarStyle } from '../../../../utils/utils';
import styles from './bookTagMoreDisplayItem.scss';

export default class BookTagMoreDisplayItem extends PureComponent {
  static propTypes = {
    book: PropTypes.shape({
      title: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      images: PropTypes.object.isRequired,
      translator: PropTypes.array.isRequired,
      publisher: PropTypes.string.isRequired,
      pubdate: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        average: PropTypes.string.isRequired,
        numRaters: PropTypes.number.isRequired
      }).isRequired,
      summary: PropTypes.string.isRequired,
      ebook_url: PropTypes.string
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

        <div className={styles['book-info']}>
          <h3 className={styles['book-title']}>
            <a href={book.alt}>{book.title}</a>
          </h3>

          <p className={styles['book-other-info']}>
            {`${book.author.join()}   /  `}
            {`${book.translator.join()}  /  `}
            {`${book.publisher}  /  `}
            {`${book.pubdate}  /  `}
            {book.price}
          </p>

          <div>
            <span
              className={styles['score-image']}
              style={getStarStyle(book.rating.average)}
            />
            <span className={styles['average-score']}>
              {book.rating.average}
            </span>
            <span>({book.rating.numRaters}人评价)</span>
          </div>

          <p className={styles['book-summary']}>
            {book.summary.length > 80
              ? `${book.summary.substring(0, 80)}...`
              : book.summary}
          </p>

          <div>
            <a href={book.alt} className={styles['buy-books']}>
              去豆瓣购买
            </a>
            {book.ebook_url && (
              <a href={book.ebook_url} className={styles['e-book']}>
                去看电子版
              </a>
            )}
          </div>
        </div>
      </li>
    );
  }
}
