import React, { Component } from 'react';
import { observable, action, flow } from 'mobx';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import HeaderSuggest from '../HeaderSuggest';
import { getSearchData } from '../../../apis';
import styles from './headerInput.scss';

@inject('headerStore')
@observer
export default class HeaderInput extends Component {
  static propTypes = {
    headerStore: PropTypes.shape({
      currentModule: PropTypes.object.isRequired
    }).isRequired
  };

  componentWillReceiveProps() {
    this.setKeyword('');
    this.setSearchData([]);
  }

  onInputChange = e => {
    const { value } = e.target;
    this.setKeyword(value);
    const { currentModule } = this.props.headerStore;
    // 豆瓣api没有同城活动的搜索接口，因此输入内容为空或者在同城活动页搜索时不予响应
    if (value !== '' && currentModule.value !== 'city') {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.timer = null;
        this.fetchSearchData(value, currentModule);
      }, 200);
    }
    e.preventDefault();
  };

  @action
  setKeyword = keyword => {
    this.keyword = keyword;
  };

  @action
  setSearchData = data => {
    this.searchData = data;
  };

  @action
  setIsFocusOnInput = isFocus => {
    this.isFocusOnInput = isFocus;
  };

  fetchSearchData = flow(
    function*(keyword, module, start, count) {
      try {
        const response = yield getSearchData(
          keyword,
          module.value,
          start,
          count
        );
        const data = response.data[module.field];
        this.setSearchData(data);
      } catch (error) {
        console.log(error);
      }
    }.bind(this)
  );

  @observable keyword = '';
  @observable searchData = [];
  @observable isFocusOnInput = false;

  render() {
    const { currentModule } = this.props.headerStore;

    return (
      <div className={styles['search-content']}>
        <form className={styles['search-form']}>
          <input
            type="text"
            value={this.keyword}
            className={styles['search-input']}
            placeholder={currentModule.placeholder}
            onChange={this.onInputChange}
            onFocus={() => this.setIsFocusOnInput(true)}
            onBlur={() => this.setIsFocusOnInput(false)}
          />

          <input
            type="submit"
            value="搜索"
            className={`${styles['search-submit']} ${
              styles[currentModule.searchIcon]
            }`}
          />
        </form>

        {this.searchData.length !== 0 &&
          this.keyword !== '' && (
            <HeaderSuggest
              searchData={this.searchData}
              isFocusOnInput={this.isFocusOnInput}
            />
          )}
      </div>
    );
  }
}
