import React, { Component } from 'react';

class EditListForm extends Component {

  state = {
      id: this.props.list.id,
      title: this.props.list.title,
      excerpt: this.props.list.excerpt
  }

  handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    if (e.keyCode===13){
      e.preventDefault();
      this.props.editList(this.state.id, e.target.value);
    }
  }
  render(){
    return(
      <input  name="title"
              type="text"
              placeholder="Title..."
              onKeyUp={this.handleSubmit}/>
    )
  }
}
export default EditListForm;