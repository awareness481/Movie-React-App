import React from 'react';
import NewMovies from './NewMovies';
import Action from './Action';

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
  componentDidUpdate() {
    console.log('update!');
  }

  render() {
    return (
      <div>
        <Action
          onHandleAction={this.handleAction} 
        />
      </div>
    );
  }
}