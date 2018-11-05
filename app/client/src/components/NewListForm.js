import React from 'react'

const NewListForm = ({onNewList = f => f}) => {
  let title, excerpt
  const submit = e => {
    e.preventDefault()
    onNewList(title.value, excerpt.value)
    title.value = ""
    excerpt.value = ""
    title.focus()
  }

  return (
    <>
      <form onSubmit={submit}>
        <input type="text" ref={input => title = input} placeholder="Title..." required />
        <input type="text" ref={input => excerpt = input} placeholder="Excerpt..." required />
        <button>Add List</button>
      </form>
    </>
  )
}

export default NewListForm
