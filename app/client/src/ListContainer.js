import React, { Component } from 'react'
import axios from 'axios'

import List from './List'

class ListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/lists.json')
    .then(res => {
      this.setState({
        lists: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.lists)
    return (
      <>
        <div className="List-container">
          {this.state.lists.map(list => {
            return (
              <List list={list} key={list.id} />
            )
          })}
        </div>
      </>
    )
  }
}

export default ListContainer
