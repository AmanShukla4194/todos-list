import React from 'react'

export const Todos_Item = ({todo,onDelete1}) => {
  return (
    <div>
        <h5>{todo.sno}</h5>
        <h5>{todo.title}</h5>
        <p>{todo.desc}</p>
        {/* passing the arrow function and then calling the delete function inside */}
        <button className='btn btn-sm btn-danger' onClick={()=>{onDelete1(todo)}}>Delete</button> 
    </div>
  )
}
