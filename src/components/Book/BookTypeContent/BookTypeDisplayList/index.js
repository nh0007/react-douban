import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BookTypeDisplayItem from '../BookTypeDisplayItem';

export default class BookTypeDisplayList extends PureComponent {
  static propTypes = {
    bookList: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { bookList } = this.props;
    return (
      <ul>
        {bookList.map(book => (
          <BookTypeDisplayItem key={book.id} book={book} />
        ))}
      </ul>
    );
  }
}
