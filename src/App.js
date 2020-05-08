import React, { Component } from 'react';
import logo from './logo.svg';

import appStyles from './App.module.css';
import Typed from 'react-typed';

import Buttons from './Components/Buttons.module.css';


class App extends Component {

  state = { show : false }

  timer = () => {
    this.timerBtn = setInterval(() => {
      this.setState({ show : true })
    }, 2200)
  }

  render() {

    const show = this.state.show;

    this.timer();

    return (
      <div className= {appStyles.App} >
        <img src={logo} className= {appStyles.AppLogo} alt="logo" />
        <br></br>

        <h1>
          <Typed
              strings={['Hi, I\'m the Name Handler!']}
              typeSpeed={60}
          />
        </h1>

        {show &&
          <button className={Buttons.buttonPrimary} >
            Cool, but what are you, exactly?
          </button>
        }

      </div>
    );

  }
}

export default App;
