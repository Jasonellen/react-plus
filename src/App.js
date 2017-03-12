import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import IndexContainer from './redux/container/index'

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <IndexContainer/>
      </Provider>
    );
  }
}

