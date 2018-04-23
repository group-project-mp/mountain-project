import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
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
import filter from '../components/Filter/Filter';
import Header from '../components/headerFooter/Header';
import FilteredRoutes from './Filter/FilteredRoutes';
import Carousel from './Carousel/Carousel';
import Results from '../components/Filter/Results';
import Slot_1 from './Areas/Slot_1';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Switch>
          <Route exact path='/' component={home} />
          <Route path='/route/:id' component={route} />
          <Route path='/user' component={profile} />
          <Route path='/add' component={add} />
          <Route path='/finalarea/:area' component={FinalArea} />
          <Route path='/results' component={Results} />
          <Route path='/state/:area' component={slot_2} />
          <Route path='/area/:area' component={slot_3} />
          <Route path='/subarea/:area' component={slot_4} />
          <Route path='/subarea5/:area' component={slot_5} />
          <Route path='/subarea6/:area' component={slot_6} />
          <Route path='/filter' component={filter} />
          <Route path='/filteredroutes' component={FilteredRoutes} />
          <Route path='/carousel' component={Carousel} />
          <Route path='/areas' component={Slot_1} />
        </Switch>

      </div >
    );
  }
}

export default App;
