import React from 'react';
// import MoviePage from 'MoviePage';
import { Link } from 'react-router-dom';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      array: []
    }

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      console.log(nextProps.query)
      return { query: nextProps.query };
    }
  }


  componentDidUpdate() {
    if ( this.state.query === '') {
      return 'Query was empty';
    }

    const url = `http://www.omdbapi.com/?s=${this.state.query}&type=movie&r=json&apikey=${API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.Search) {
          return 'error'
        }
        let movies = Array.from(data.Search);
        this.setState({
          array: movies.map((movie) =>
            <Link to={`/movie/${movie.imdbID}`}>
              <li key={movie.Title}>
                {/* <h2>{movie.Title}</h2> */}
                <img src={`${movie.Poster}`} /> 
              </li>
            </Link>
          )
        })
      })
  }

  render() {
    return (
      <div>
        <ul className='results'>
          {this.state.array}
        </ul>
      </div>
    );
  }
}