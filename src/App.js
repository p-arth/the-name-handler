import React, { Component } from 'react';
import logo from './logo.svg';
import appStyles from './App.module.css';

class App extends Component {

  render() {

    return (
      <div className= {appStyles.App} >
        <img src={logo} className= {appStyles.AppLogo} alt="logo" />
        <h1>Hi, I'm the Name Handler!</h1>
      </div>
    );

  }
}

export default App;
