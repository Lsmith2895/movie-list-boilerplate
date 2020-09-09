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

//todo 
//fix css so watched isnt all over the place when list entry is added
//fix handleAdd to not add list items if add bar is submitted empty
//