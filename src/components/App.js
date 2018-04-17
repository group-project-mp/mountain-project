import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import home from '../components/Home/Home';
import route from '../components/Route/Route';
import areas from '../components/Areas/Areas';
import profile from '../components/Profile/Profile';
import add from '../components/Add/Add';
import filter from '../components/Filter/Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={home} />
            <Route path='/route/:id' component={route} />
            <Route path='/user/:id' component={profile} />
            <Route path='/areas' component={areas} />
            <Route path='/add' component={add} />
            <Route path='/filter' component={filter}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
