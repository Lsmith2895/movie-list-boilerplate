import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

var movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
  { title: 'Lion, Witch, wardrobe' }
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      value: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      this.setState({ movies: movies })
    }

    //it over movie list searching for title
    for (var movie of movies) {
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


  render() {

    return (
      <div>
        <div className='title'>LMDb</div>
        <div className='list'>
          LIST
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