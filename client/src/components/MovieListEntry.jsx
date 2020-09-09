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
                class='watched' 
                type="button">WATCHED</button>
            </li>
        )
    }

}

export default MovieListEntry;
