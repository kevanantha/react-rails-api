import React from 'react'

const List = (props) => {
  const { list, onRemoveList, editingList } = props
  return (
    <div className='single-list' key={list.id}>
      <h4>{list.title}</h4>
      <p>{list.excerpt}</p>
      <button onClick={() => onRemoveList(list.id)}>Erase</button>
      <button onClick={() => editingList(list.id)}>Edit</button>
    </div>
  )
}

export default List
