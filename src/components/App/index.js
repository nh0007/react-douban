import React, { Component } from 'react';
import Header from '../Header';
import Main from '../Main';

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
