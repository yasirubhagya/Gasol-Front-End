import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuBar from './Layout/AppBar';
import Pap from './Channel/Channel';
import SignUp from './Auth/SignUp';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MenuBar/>
        <div className="App">
               <Pap></Pap>
               <SignUp/>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
