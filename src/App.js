import Books from './components/Books'

import React, { Component } from 'react';

import store from './store/store';

import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Books />
        </div>
      </Provider>
    );
  }
}

export default App;
