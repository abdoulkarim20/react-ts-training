import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { ITodo } from './todo.model'

const App: React.FC = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    /**On verifie si ya une valeur saisie*/
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      /**Si l'enregistrement est fait on vide le formulaire*/
      setTodo("");
      console.log("Les todos sont", todos);
    }
  }


  return (
    <div className='App'>
      <span className='Heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      {todos.map((t))}
    </div>
  )
}

export default App
