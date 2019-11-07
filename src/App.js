// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from 'src/dataHandlers/Store';
import Home from 'src/container/home';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <Home />
      </Provider>
    );
  }
}
