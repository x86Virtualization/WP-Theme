import React, { Component } from 'react';
import { render } from 'react-dom'; // importing render from ReactDOM

import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><a href="/">Welcome to x86 Virtualization</a></h1>
        </header>
        <div id="content">
          <Posts />
        </div>
      </div>
    );
  }
}

export default App;
