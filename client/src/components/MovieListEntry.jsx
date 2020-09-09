import React from 'react'

class MovieListEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <li>
                {this.props.value.title}
                <button 
                className='watched' 
                type="button">WATCHED</button>
            </li>
        )
    }

}

export default MovieListEntry;
