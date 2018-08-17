import React, { Component } from 'react';

class EditListForm extends Component {

  componentDidMount(){
    this.editInput.focus()
  }

  state = {
      id: this.props.list.id,
      title: this.props.list.title,
      excerpt: this.props.list.excerpt
  }

  handleSubmit = (e) => {
    if (e.keyCode===13){
      e.preventDefault();
      this.props.editList(this.state.id, e.target.value);
    }
  }
  render(){
    return(
      <input  ref={(input) => { this.editInput = input }}
              name="title"
              type="text"
              placeholder="Edit Todo"
              onKeyUp={this.handleSubmit}
              onBlur={this.props.cancelEdit}/>
    )
  }
}
export default EditListForm;