import React from 'react';

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
    if (this.state.query === '') {
      return 'Query was empty';
    }

    let movies = [];

    const url = `http://www.omdbapi.com/?s=${this.state.query}&type=movie&r=json&apikey=${API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.Search) {
          return 'error'
        }
        let movies = Array.from(data.Search);
        this.setState({
          array: movies.map((movie) => <li key={movie.Title}>{movie.Title}</li>)
        })
      })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.array}
        </ul>
      </div>
    );
  }
}