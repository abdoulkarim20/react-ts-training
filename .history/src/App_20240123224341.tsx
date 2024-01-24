import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { ITodo } from './todo.model'

const App: React.FC = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState<ITodo[]>([]);
  console.log("le contenu du formulaire est:", todo);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    /**On verifie si ya une valeur saisie*/
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      /**Si l'enregistrement est fait on vide le formulaire*/
      set
    }
  }


  return (
    <div className='App'>
      <span className='Heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
    </div>
  )
}

export default App
