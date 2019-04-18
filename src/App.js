import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuBar from './Layout/AppBar';
import Channel2 from './Channel2/Channel2';
import Footer from './Layout/Footer';
import Pap from './Channel/Channel';
import SignUp from './Auth/SignUp';
import './App.css';
import { Divider } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MenuBar />
        <div className="App">
          <Channel2 />
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
