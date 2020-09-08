import React from 'react'
import MovieListEntry from './MovieListEntry.jsx';
import SearchBar from './SearchBar.jsx';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ul>
                {this.props.movies.map(
                    (entry, idx) => <MovieListEntry value={entry} key={entry + idx} />)
                }
            </ul>
        )
    }

}

export default MovieList;
