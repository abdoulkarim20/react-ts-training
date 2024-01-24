import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>();



  return (
    <div className='App'>
      <span className='Heading'>Taskify</span>
      <InputField todo={t} />
    </div>
  )
}

export default App
