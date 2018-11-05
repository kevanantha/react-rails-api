import React, { Component } from 'react';
import './App.css';

import ListContainer from './ListContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello Hiplyst</h1>
          <ListContainer />
        </header>
      </div>
    );
  }
}

export default App;
