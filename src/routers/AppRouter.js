import React from 'react';
import { BrowserRouter, Route, Link, Switch  } from 'react-router-dom';

import MovieApp from '../components/MovieApp';
import MoviePage from '../components/MoviePage';
import SearchResults from '../components/SearchResults';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={MovieApp} exact={true}/>
        <Route path='/movie/:id' component={MoviePage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;