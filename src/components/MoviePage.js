import React from 'react';

export default class MoviePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: "x",
      Year: '',
      Rating: '',
      Runtime: '',
      Genre: '',
      Director: '',
      Writer: '',
      Actors: '',
      Awards: '',
      Plot: '',
      Reviews: {
        imdb: 0,
        rt: 0,
        ms: 0
      },
      nrOfVotes: 0
    }

    this.handleMovieDetails = this.handleMovieDetails.bind(this);
  }

  componentDidMount(props) {
    const id = this.props.movie;
    const url = `http://www.omdbapi.com/?t=${id}&plot=full&apikey=API_KEY`;

    fetch(url)
      .then(res => res.json())
      .then(data => {this.handleMovieDetails(data)}
    );
  }

  handleMovieDetails(movie) {
    this.setState({
      Title: movie.Title.toString(),
      Year: movie.Year,
      Rating: movie.Rated,
      Runtime: movie.Runtime,
      Genre: movie.Genre,
      Director: movie.Director,
      Writer: movie.Writer,
      Actors: movie.Actors,
      Awards: movie.Awards,
      Plot: movie.Plot,
      Poster: movie.Poster
    })
  }

  render() {
    return (
      <div className='movie'>
        <div className='movie-container'>
          <div className='movie-poster'>
            <img src={this.state.Poster} />
          </div>
          <div className='movie-two'>
            <h1 className='movie-title'>{this.state.Title}</h1>
            <span className='subtitle'>{this.state.Rating}, {this.state.Runtime}</span>
            <p>{this.state.Plot}</p>
            <div className='movie-details'>
              <span><h3>Original Release: </h3>{this.state.Year}</span>
              <span><h3>Genre: </h3>{this.state.Genre}</span>
              <span><h3>Writer: </h3>{this.state.Writer}</span><span><h3>Director: </h3>{this.state.Director}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}