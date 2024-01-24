import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'

const App: React.FC = () => {
  const [todo, setTodo] = useState("")
  log

  return (
    <div className='App'>
      <span className='Heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App