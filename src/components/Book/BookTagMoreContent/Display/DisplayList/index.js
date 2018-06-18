import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DisplayItem from './DisplayItem';

export default class DisplayList extends PureComponent {
  static propTypes = {
    bookList: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { bookList } = this.props;
    return (
      <ul>{bookList.map(book => <DisplayItem key={book.id} book={book} />)}</ul>
    );
  }
}
