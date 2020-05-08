import React, { Component } from 'react';
import logo from './logo.svg';
import appStyles from './App.module.css';

class App extends Component {

  render() {

    return (
      <div className= {appStyles.App} >
        <header className={appStyles.AppHeader}>
          <img src={logo} className= {appStyles.AppLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={appStyles.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

  }
}

export default App;
