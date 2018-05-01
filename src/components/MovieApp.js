import React from 'react';
import NewMovies from './NewMovies';

class MovieApp extends React.Component {
  constructor() {

  }

  render() {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
        <NewMovies />
      </div>
    )
  }
}