import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import home from '../components/Home/Home';
import route from '../components/Route/Route';
import profile from '../components/Profile/Profile';
import add from '../components/Add/Add';
import FinalArea from '../components/Areas/FinalArea'
import slot_2 from '../components/Areas/Slot_2';
import slot_3 from '../components/Areas/Slot_3';
import slot_4 from '../components/Areas/Slot_4';
import slot_5 from '../components/Areas/Slot_5';
import slot_6 from '../components/Areas/Slot_6';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={home} />
            <Route path='/route/:id' component={route} />
            <Route path='/user/:id' component={profile} />
            <Route path='/add' component={add} />
            <Route path='/finalarea/:area' component={FinalArea}/>
            <Route path='/state/:area' component={slot_2}/>
            <Route path='/area/:area' component={slot_3}/>
            <Route path='/subarea/:area' component={slot_4}/>
            <Route path='/subarea5/:area' component={slot_5}/>
            <Route path='/subarea6/:area' component={slot_6}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
