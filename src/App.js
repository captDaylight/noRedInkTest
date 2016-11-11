import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import Tester from './Tester';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
				<Tester />
			</Provider>
    );
  }
}
