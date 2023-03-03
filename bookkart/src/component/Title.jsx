import React from 'react'
import List from './List'

const Title = () => {
    const array = [
        {id:0, title: "Page1", description: "This is Page 1"},
        {id:1, title: "Page2", description: "This is Page 2"},
        {id:2, title: "Page3", description: "This is Page 3"},
        {id:3, title: "Page4", description: "This is Page 4"},

    ]
  return (
    <>
        
        {array.map((element) => {
            return(
                <List 
                    key={element.id}
                    title={element.title}
                    description={element.description}
                />
            )
        })}
    </>
  )
}

export default Title