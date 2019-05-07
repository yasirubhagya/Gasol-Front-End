import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashBoard from '../Layout/DashBoard';
import Doctors from './Doctors/Doctors';
import ConsultantType from './ConsultantType/ConsultantType';
import Channels from './Channels/Channels';
class App extends Component {

    

    render() {
        return (
            <DashBoard>
                <Switch>
                    <Route path="/" exact component={null} />
                    <Route path="/Reports" exact component={null} />
                    <Route path="/Doctors" component={Doctors} />
                    <Route path="/ConsultantType" component={ConsultantType} />
                    <Route path="/Channels" component={Channels} />
                    <Route path="/Profile" component={null} />
                </Switch>
             
            </DashBoard>
        );
    }
}

export default App;
