import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

      return (
        <form onSubmit={this.props.searchFunc}>
          <input
            type='text'
            onChange={this.props.handleChange}
          />
          <input type="submit" value="Search" />
        </form>

      )
    }
}

export default SearchBar;

/*
 <div className="searchBar">
                <input type="text" placeholder="Search.."></input>
                <button className=".search-container"> GO!</button>
            </div>

            value={this.state.value}
*/