import React, { Component } from 'react'

class EdtiListForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.list.id,
      title: this.props.list.title,
      excerpt: this.props.list.excerpt
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSumbit = this.handleSumbit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSumbit = e => {
    e.preventDefault()
    const { id, title, excerpt } = this.state
    this.props.editList(id, title, excerpt)
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSumbit}>
          <input type="text" name="title" placeholder="Title..." value={this.state.title} onChange={this.handleChange} />
          <input type="text" name="excerpt" placeholder="Excerpt..." value={this.state.excerpt} onChange={this.handleChange} />
          <button>Update List</button>
        </form>
      </>
    )
  }
}

export default EdtiListForm
