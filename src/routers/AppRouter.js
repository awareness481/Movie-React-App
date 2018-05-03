import React from 'react';
import { BrowserRouter, Link, Switch  } from 'react-router-dom';

import MovieApp from '../components/MovieApp';
import SearchResults from '../components/SearchResults';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={MovieApp} exact={true}/>
        <Route path='/movie/:id' component={MovieApp}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;