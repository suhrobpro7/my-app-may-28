import React from 'react'

function TodoList(props) {
  return (
    <>
      <ul>
        {props.list.map((text, index) => {
            return <li key={index}>{text}<input type="checkbox"></input></li>
        })}
      </ul>
    </>
  )
}
export default TodoList;