import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashBoard from '../Layout/DashBoard';
import Doctors from './Doctors/Doctors';
import ConsultantType from './ConsultantType/ConsultantType';
import Channels from './Channels/Channels';
import City from './City/City';
import DoctorsOfChannelCenter from './DoctorsOfChannelCenter/DoctorsOfChannelCenter';
class App extends Component {

    

    render() {
        return (
            <DashBoard>
                <Switch>
                    <Route path="/" exact component={null} />
                    <Route path="/Reports" exact component={null} />
                    <Route path="/Doctors" component={Doctors} />
                    <Route path="/DoctorsOfChannelCenter" component={DoctorsOfChannelCenter} />
                    <Route path="/ConsultantType" component={ConsultantType} />
                    <Route path="/City" component={City} />
                    <Route path="/Channels" component={Channels} />
                    <Route path="/Profile" component={null} />
                </Switch>
             
            </DashBoard>
        );
    }
}

export default App;
