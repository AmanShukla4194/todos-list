import './App.css';
import Header from './components/Header';  // for default function export
import {Todos} from "./components/Todos";
import Footer from "./components/Footer";
import React, {useState} from 'react'; 

function App() {

  const onDelete = (todo)=>{
      console.log("I'm on delete", todo);

      setTodos(todos.filter((e)=>{
        return e!==todo;
      }));
  }


  const [todos, setTodos]= useState([
    {
      sno: 1,
      title:"Go to the market",
      desc: "you need to go the market to buy matar paneer"
    },
    {
      sno: 2,
      title:"Go to the mall",
      desc: "you need to go the mall"
    },
    {
      sno: 3,
      title:"Go to the Ghat",
      desc: "you need to go the Ghat"
    }
  ]
  );
  return (
    <>
    <Header title = "My-Todos-List" searchBar={false} />
    <Todos todos = {todos} onDelete={onDelete}/>
    <Footer/>

    </>
  );
}

export default App;
