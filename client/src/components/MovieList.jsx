import React from 'react'
import MovieListEntry from './MovieListEntry.jsx';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <ul>
                {this.props.movies.map(
                    (entry, idx) =>
                        <MovieListEntry
                            value={entry}
                            key={entry + idx}
                            toggle={this.props.toggle}
                        />)
                }

            </ul>
        )
    }

}

export default MovieList;
