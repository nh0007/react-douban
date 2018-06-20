import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import CommonModal from '../../../Common/CommonModal';
import styles from './movieModal.scss';

export default class MovieModal extends PureComponent {
  static propTypes = {
    selectedMovie: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired,
    isShowModal: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired
  };

  header = null;
  body = null;

  render() {
    const { selectedMovie, isShowModal, hideModal } = this.props;
    if (isShowModal) {
      this.header = <h3 className={styles['modal-header']}>您好</h3>;
      this.body = (
        <span>
          本程序并无实际购票功能，若您喜欢
          <strong className={styles['modal-title']}>
            {selectedMovie.title}
          </strong>
          ，可往
          <a href="https://movie.douban.com/" className={styles['movie-link']}>
            豆瓣
          </a>
          查看
        </span>
      );
    }
    return (
      <CSSTransition
        in={isShowModal}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <CommonModal
          hideModal={hideModal}
          header={this.header}
          body={this.body}
        />
      </CSSTransition>
    );
  }
}
