import React from 'react';

class AddBar extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {

    return (
      <form onSubmit={this.props.AddMovie}>
        <input 
          type='text'
          onChange={this.props.handleChange}
        />
        <input 
          type="submit"
          value="Add" 
        />
      </form>
    )
  }
}

export default AddBar;

//show only user added movies
//change the way movies are rendered
  //dont render the movie var in app.jsx
  //do render the movie prop of state