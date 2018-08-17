import React, { Component } from 'react';

class NewListForm extends Component {

  render () {
    return (
      <input  onKeyUp={this.props.addNewList}
              type="text"
              placeholder="List Name" required />

    )
  }
}
export default NewListForm;