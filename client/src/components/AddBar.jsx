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
//add toggle to watched button color
//add toggle to watch button to change movie state
  //i.e. add a movie watched property to newly added items
  //with a default value of 'to watch' eventually T or F
  //in order to toggle which list it lives in

  //kick off app in terminal with 
    // npm start