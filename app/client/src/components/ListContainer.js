import React, { Component } from 'react'
import axios from 'axios'

import List from './List'
import NewListForm from './NewListForm'
import EdtiListForm from './EditListForm'

class ListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [],
      editingListId: null
    }
    this.addNewList = this.addNewList.bind(this)
    this.removeList = this.removeList.bind(this)
    this.editingList = this.editingList.bind(this)
    this.editList = this.editList.bind(this)
  }

  addNewList = (title, excerpt) => {
    axios.post('http://localhost:3001/api/v1/lists', { list: { title, excerpt } })
    .then(res => {
      console.log(res)
      const lists = [ ...this.state.lists, res.data ]
      this.setState({lists})
    })
    .catch(err => {
      console.log(err)
    })
  }

  removeList = id => {
    axios.delete('http://localhost:3001/api/v1/lists/' + id)
    .then(res => {
      const lists = this.state.lists.filter(
        list => list.id !== id
      )
      this.setState({lists})
    })
    .catch(err => console.log(err))
  }

  editingList = id => {
    this.setState({
      editingListId: id
    })
    console.log(this.state.editingListId)
  }

  editList = (id, title, excerpt) => {
    axios.put('http://localhost:3001/api/v1/lists/' + id, {
      list: {
        title,
        excerpt
      }
    })
    .then(res => {
      console.log(res)
      const lists = this.state.lists
      lists[id-1] = {id, title, excerpt}
      this.setState(() => ({
        lists,
        editingListId: null
      }))
    })
    .catch(err => console.log(err.res))
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/lists')
    .then(res => {
      this.setState({
        lists: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <div className="List-container">
          {this.state.lists.map(list => {
            if (this.state.editingListId === list.id) {
              return (
                <EdtiListForm list={list} key={list.id} editList={this.editList} />
              )
            } else {
              return (
                <List list={list} key={list.id} onRemoveList={this.removeList} editingList={this.editingList} />
              )
            }
          })}
          <NewListForm onNewList={this.addNewList} />
        </div>
      </>
    )
  }
}

export default ListContainer
