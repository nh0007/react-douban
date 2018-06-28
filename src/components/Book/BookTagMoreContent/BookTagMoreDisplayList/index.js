import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BookTagMoreDisplayItem from '../BookTagMoreDisplayItem';

export default class BookTagMoreDisplayList extends PureComponent {
  static propTypes = {
    bookList: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { bookList } = this.props;
    return (
      <ul>
        {bookList.map(book => (
          <BookTagMoreDisplayItem key={book.id} book={book} />
        ))}
      </ul>
    );
  }
}
