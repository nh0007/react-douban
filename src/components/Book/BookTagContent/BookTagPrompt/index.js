import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './bookTagPrompt.scss';

export default class BookTagPrompt extends PureComponent {
  static propTypes = {
    bookPrompt: PropTypes.shape({
      book: PropTypes.object,
      index: PropTypes.number
    }).isRequired,
    position: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
      top: PropTypes.number,
      left: PropTypes.number
    }).isRequired
  };

  // 计算提示框显示位置
  getPromptPosition() {
    const { bookPrompt, position } = this.props;
    const { width, height, top } = position;
    const { index } = bookPrompt;
    const promptTop = index < 5 ? top + 35 : top + height * 0.5 + 10;
    const columnIndex = (index % 5) + 1;
    const promptLeft = columnIndex * (width * 0.2) - columnIndex * 8;
    return {
      top: `${promptTop}px`,
      left: `${promptLeft}px`
    };
  }

  render() {
    const { book } = this.props.bookPrompt;
    const promptPosition = this.getPromptPosition();
    return (
      <div
        className={styles['book-prompt']}
        style={{ marginLeft: promptPosition.left, top: promptPosition.top }}
      >
        <span className={styles['outside-triangle']} />
        <span className={styles['inside-triangle']} />
        <h3 className={styles['prompt-title']}>{book.title}</h3>
        <p className={styles['prompt-introduce']}>
          {book.author.join()} / {book.pubdate} / {book.publisher}
        </p>
        <p className={styles['prompt-summary']}>
          {book.summary.length >= 160
            ? `${book.summary.substring(0, 160)}...`
            : book.summary}
        </p>
      </div>
    );
  }
}
