import React from 'react'

const List = (props) => {
  return (
    <>
        <li>
            {props.title}{" "}
            {props.description}
        </li>
    </>
  )
}

export default List