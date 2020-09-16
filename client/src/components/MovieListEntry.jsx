import React from 'react'

class MovieListEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var movieToRender;
        //conditionaly render secondary movie data and poster
        if (this.props.value.show === true) {
            movieToRender = <div>
                {this.props.value.title}
                <div> Year: {this.props.value.Year} </div>
                <div>Watched: {this.props.value.watched.toString()}</div>
                <div>imdbID: {this.props.value.imdbID}</div>
                <img src={this.props.value.Poster}></img>
            </div>
        } else {
            movieToRender = <div>{this.props.value.title}</div>
        }

        return (
            <li className="listItem">

                <div onClick={() => { this.props.showMovie(this.props.value.title) }}>
                    {movieToRender}
                </div>
                <button
                    className='watched'
                    type="button"
                    onClick={() => {
                        this.props.toggle(this.props.value.title)
                    }}
                >WATCHED</button>
            </li>
        )
    }
}

export default MovieListEntry;

//titles hvave a show prop now with default of false
//when title div is selected it now changes value to true 
//or false depending on current values

//conditonally render the secondary props with a value of true