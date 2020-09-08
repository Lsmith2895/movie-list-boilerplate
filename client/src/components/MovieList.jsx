import React from 'react'
import MovieListEntry from './MovieListEntry.jsx';
import SearchBar from './SearchBar.jsx';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='list'>
                LIST
                <div>
                    <SearchBar searchFunc={this.props.searchFunc}/>
                </div>

                <ul>
                    {this.props.movies.map(
                        (entry, idx) => <MovieListEntry value={entry} key={entry + idx} />)
                        }
                </ul>
            </div>

        )
    }

}

export default MovieList;
