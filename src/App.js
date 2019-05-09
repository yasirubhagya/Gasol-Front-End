import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuBar from './Layout/AppBar';
import Channel2 from './PublicSection/Channel2/Channel2';
import Footer from './Layout/Footer';
import SignUp from './Auth/SignUp';
import './App.css';
import { Divider } from '@material-ui/core';
import MainAdminPannel from './AdminSection/Main';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
class App extends Component {

 
   
  render() {
    
    return (
      <BrowserRouter>
        { localStorage.getItem('isAdmin') === 'true'?
          (
            <MainAdminPannel />
          ) : (
              <React.Fragment>
                <CssBaseline />
                <MenuBar />
                <div className="App">
                <Switch>
                    <Route path="/" exact component={Channel2} />
                    <Route path="/SignUp" exact component={SignUp} />
                </Switch>
                
                  
                </div>
                <Footer />
              </React.Fragment>
            )
        }
      </BrowserRouter>
    );

  }
}

export default App;
