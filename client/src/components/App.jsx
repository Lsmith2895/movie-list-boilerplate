import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddBar from './AddBar.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      value: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSearch() {
    var movieName = this.state.value;
    var renderList = [];
    var LowerCasedMovieName = movieName.toLowerCase();

    //empty submission
    if (movieName.length === 0) {
      this.setState({ movies: this.state.movies })
    }

    //it over movie list searching for title
    for (var movie of this.state.movies) {
      if (movie.title.toLowerCase().includes(LowerCasedMovieName)) {
        renderList.push(movie)
      }
    }

    //movie not found
    if (renderList.length === 0) {
      renderList.push({ title: 'MOVIE NOT FOUND TRY AGAIN' })
    }

    //set state with render list
    this.setState({ movies: renderList })
    event.preventDefault();
  }

  handleAdd() {
    if (this.state.value.length > 0) {
      var movieName = this.state.value; //title
      var newState = this.state.movies; //state to mutate
      newState.push({ title: movieName }) //add to existing array
      this.setState({ movies: newState }) //set state to new values
    }
    event.preventDefault();
  }


  render() {

    return (
      <div>
        <div className='title'>LMDb</div>

        <div className='list'>
          <AddBar
            handleChange={this.handleChange}
            movies={this.state.movies}
            AddMovie={this.handleAdd}
          />
          <SearchBar
            handleChange={this.handleChange}
            searchFunc={this.handleSearch}
            value={this.state.value}
          />
          <MovieList movies={this.state.movies} />
        </div>
      </div>
    )
  }

}

export default App;