import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './commonModal.scss';

export default class CommonModal extends PureComponent {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    header: PropTypes.node,
    body: PropTypes.node,
    footer: PropTypes.node
  };

  static defaultProps = {
    header: 'default header',
    body: 'default body',
    footer: ''
  };

  render() {
    const { header, body, footer, hideModal } = this.props;
    return (
      <div className={styles['modal-mask']}>
        <div className={styles['modal-wrapper']}>
          <div className="modal-container">
            <div className={styles['modal-header']}>{header}</div>

            <div className={styles['modal-body']}>{body}</div>

            <div className={styles['modal-footer']}>
              {footer}
              <button className={styles['modal-button']} onClick={hideModal}>
                确定
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
