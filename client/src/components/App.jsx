import React from 'react';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddBar from './AddBar.jsx';
import WatchToggle from './watchToggle';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      value: '',
      watched: null
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRenderToWatch = this.handleRenderToWatch.bind(this);
    this.handleRenderWatched = this.handleRenderWatched.bind(this);
    this.handleWatchedToggle = this.handleWatchedToggle.bind(this);
    this.handleMovieSecondaryData = this.handleMovieSecondaryData.bind(this);
  }
  //add some dummy data on mount
  componentDidMount() {
    //add some data
    axios.get('/api/movies')
    .then((response) => {
      this.setState((state)=> {
        //add key of title and add key of watched to match previous info
         var addedKeys = response.data.map(function(movie){
          return {...movie, title: movie.Title, watched: false, show: false}
         });
        return {movies: addedKeys};
      })
      })
    .catch((err) => {
      console.log(err)
    })
  }

  //set value of state for search purposes
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  //search for movies within state
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
  //add items to movie list
  handleAdd() {
    if (this.state.value.length > 0) {
      var movieName = this.state.value; //title
      var newState = this.state.movies; //state to mutate
      newState.push({ title: movieName, watched: false }) //add to existing array
      this.setState({ movies: newState }) //set state to new values
    }
    event.preventDefault();
  }

  //change watched status of individual entry 
  handleWatchedToggle(title) {
    var newState = this.state.movies;
    for (var i = 0; i < newState.length; i++) {
      if (title === newState[i].title) {
        newState[i].watched = !newState[i].watched
      }
    }
    this.setState({ movies: newState })
  }

  //make function to handle rendering of watched or unwatched movies
  handleRenderToWatch() {
    //set status of state's watched prop according to which button was selected
    // ie watched or to watch
    var newState = this.state;
     newState.watched = false;
     this.setState(newState);
     event.preventDefault();
  }
  handleRenderWatched() {
    var newState = this.state;
    newState.watched = true;
    this.setState(newState);
    event.preventDefault();
  }
  //handle showing a movies secondary data
  handleMovieSecondaryData(title) {
    var newState = this.state.movies
      for ( var i = 0; i < newState.length; i++ ) {
        if(newState[i].title === title) {
          newState[i].show = !newState[i].show
        }
      }
      this.setState({movies: newState})
  }

  render() {
    const MoviesToShow = this.state.watched;
    var moviesToRender;

    //conditional rednering for movies(watched, to watch, or all)
    if (MoviesToShow === null) {
      //render all movies
      moviesToRender = <MovieList
        movies={this.state.movies}
        handleChange={this.handleChange}
        toggle={this.handleWatchedToggle}
        showMovie={this.handleMovieSecondaryData}
      />

    } else if (MoviesToShow === false) {
      //render to watch movies aka movies with false watched values
      var toWatch = [];
      for (var i = 0; i < this.state.movies.length; i++) {
        if (this.state.movies[i].watched === false) {
          toWatch.push(this.state.movies[i])
        }
      }
      moviesToRender = <MovieList
        movies={toWatch}
        handleChange={this.handleChange}
        toggle={this.handleWatchedToggle}
        showMovie={this.handleMovieSecondaryData}
      />
    } else {
      //render watched movies
      var watch = [];
      for (var i = 0; i < this.state.movies.length; i++) {
        
        if (this.state.movies[i].watched === true) {
          watch.push(this.state.movies[i])
        }
      }
      
      moviesToRender = <MovieList
        movies={watch}
        handleChange={this.handleChange}
        toggle={this.handleWatchedToggle}
        showMovie={this.handleMovieSecondaryData}
      />
    }

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
          <WatchToggle
            toggleToWatch={this.handleRenderToWatch}
            toggleWatched={this.handleRenderWatched}
          />
          {moviesToRender}
        </div>
      </div>
    )
  }

}

export default App;


