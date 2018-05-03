import React from 'react';

export default class Movie extends React.Component {
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
    const id = this.props.match.params.id;
    const url = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;

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
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.Title}</h1>
        <ul>
          <li>{this.state.Year}</li>
          <li>{this.state.Rating}</li>
          <li>{this.state.Runtime}</li>
          <li>{this.state.Genre}</li>
          <li>{this.state.Directo}r</li>
          <li>{this.state.Writer}</li>
          <li>{this.state.Actors}</li>
          <li>{this.state.Awards}</li>
        </ul>
        <p>{this.state.Plot}</p>
      </div>
    );
  }
}