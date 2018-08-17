import React, { Component } from 'react';

class NewListForm extends Component {


  render () {
    const newListStyle={
      width: '30%'
    }
    return (
      <input  onKeyUp={this.props.addNewList}
              type="text"
              placeholder="New Todo" required
              style={newListStyle}
               />


    )
  }
}
export default NewListForm;