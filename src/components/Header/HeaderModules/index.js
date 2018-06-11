import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './headerModules.scss';

export default class headerModules extends PureComponent {
  static propTypes = {
    modules: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const { modules } = this.props;

    return (
      <ul className={styles['module-list']}>
        {modules.map(module => (
          <li key={module.value}>
            <span>{module.text}</span>
            <div className={styles['outer-module-target']}>
              <div className={styles['inner-module-target']}>
                {module.subTypes.map(subType => (
                  <NavLink
                    key={subType.path}
                    to={subType.path}
                    className={styles['module-link']}
                  >
                    {subType.text}
                  </NavLink>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
