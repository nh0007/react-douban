import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import HeaderInput from './HeaderInput';
import HeaderModules from './HeaderModules';
import styles from './header.scss';

@inject('headerStore')
@observer
export default class Header extends Component {
  static propTypes = {
    headerStore: PropTypes.shape({
      currentModule: PropTypes.object.isRequired,
      modules: PropTypes.arrayOf(PropTypes.object).isRequired,
      setCurrentModule: PropTypes.func.isRequired
    }).isRequired
  };

  componentWillMount() {
    this.onHashChange();
  }

  componentWillReceiveProps() {
    this.onHashChange();
  }

  // 路由变化时，切换到不同路由组件
  onHashChange() {
    const { modules, currentModule, setCurrentModule } = this.props.headerStore;
    const hashname = window.location.pathname;
    if (hashname.indexOf(currentModule.value) !== -1) return;
    for (let i = 0, ii = modules.length; i < ii; i += 1) {
      if (hashname.indexOf(modules[i].value) !== -1) {
        setCurrentModule(modules[i]);
        return;
      }
    }
  }

  render() {
    const { currentModule, modules } = this.props.headerStore;

    return (
      <div
        className={styles['outer-header']}
        style={{ background: currentModule.backgroundColor }}
      >
        <div className={styles['inner-header']}>
          <h2
            className={`${styles['module-logo']} ${styles[currentModule.logo]}`}
          >
            {currentModule.text}
          </h2>

          <HeaderInput />
          <HeaderModules modules={modules} />
        </div>
      </div>
    );
  }
}
