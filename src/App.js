import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeView from "./views/HomeView";
import ResourceView from "./views/ResourceView";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView}/>
          <Route path={`/resource/:type/:id`} component={ResourceView} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
