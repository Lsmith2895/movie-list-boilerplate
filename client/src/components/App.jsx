import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddBar from './AddBar.jsx';
import WatchToggle from './watchToggle';


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
    this.handleWatchedToggle = this.handleWatchedToggle.bind(this);
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
      newState.push({ title: movieName, watched: false }) //add to existing array
      this.setState({ movies: newState }) //set state to new values
    }
    event.preventDefault();
  }

  handleWatchedToggle(title) {
    var newState = this.state.movies;

    for (var i = 0; i < newState.length; i++){
      if ( title === newState[i].title) {
        newState[i].watched = !newState[i].watched
      }
    }
    
    console.log(newState)
    this.setState({movies: newState})
  }


  render() {

    return (
      <div>
        <div className='title'>LMDb</div>
        <div className='addBar'>
          <AddBar
            handleChange={this.handleChange}
            movies={this.state.movies}
            AddMovie={this.handleAdd}
          />
        </div>

        <div className='list'>

          <SearchBar
            handleChange={this.handleChange}
            searchFunc={this.handleSearch}
            value={this.state.value}
          />
          <WatchToggle/>
          <MovieList 
          movies={this.state.movies} 
          handleChange={this.handleChange}
          toggle={this.handleWatchedToggle}
          />
        </div>
      </div>
    )
  }

}

export default App;