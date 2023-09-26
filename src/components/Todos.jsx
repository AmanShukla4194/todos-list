import React from 'react'
import { Todos_Item } from './Todos_Item'
export const Todos = (props) => {
  return (
   <div className="container">
    <h3 className='text-center my-4'> Todos List</h3>
    {/* <Todos_Item todo={props.todos[0]}/> */}
    {props.todos.map((i)=>{
        // return <Todos_Item todo1={todo2}/>
        return(
          <>
          {/* <h3> HI </h3> */}
          <Todos_Item todo={i} key={i.sno} onDelete1={props.onDelete}/>
          </>
          )
    })}
   </div>
  )
}

