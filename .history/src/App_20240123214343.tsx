import React from 'react'
import './App.css'
import InputField from './components/InputField'

cons App: React.FC=() => {
  return (
    <div className='App'>
      <span className='Heading'>Taskify</span>
      <InputField />
    </div>
  )
}

export default App