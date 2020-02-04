import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import BoardWrapper from '../components/BoardWrapper';
import BoardsLinkWrapper from '../components/BoardsLinkWrapper';

const App = () => {
  return(
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={BoardWrapper} />
        <Route path="/b/:id" component={BoardsLinkWrapper} />
        <Route component={BoardWrapper} />
      </Switch>
    </div>
  )
}

export default App;

