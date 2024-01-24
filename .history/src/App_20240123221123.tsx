import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'

const App: React.FC = () => {
  const [todo, setTodo] = useState("")
  const [todos]
  console.log("le contenu du formulaire est:", todo);


  return (
    <div className='App'>
      <span className='Heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App
