import React from 'react';
import Action from './Action';
import MoviePage from './MoviePage'
import image from '../styles/img/a.jpg';

export default class MovieApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: "",
      movieSelected: false 
    }

    this.handleAction = this.handleAction.bind(this);
  }

  handleAction(e) {
    this.setState({ 
      movieSelected: true,
      movie: e
    });
  }

  render() {
    return (
      <div className='app'>
        <div className='img'>
          <Action
            onHandleAction={this.handleAction} 
          />
          {this.state.movieSelected && <MoviePage movie={this.state.movie} />}
        </div>
      </div>
    );
  }
}