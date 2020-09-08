import React from 'react'

class MovieListEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <li>
                {this.props.value.title}
            </li>
        )
    }

}

export default MovieListEntry;
