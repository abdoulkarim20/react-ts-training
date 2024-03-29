import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { ITodo } from './todo.model'
import TodoList from './components/TodoList'

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
      <span className='Heading'>Gestion des tâches</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
