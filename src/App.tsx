import React, { useEffect, useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { ITodo } from './todo.model'
import TodoList from './components/TodoList'

const App: React.FC = () => {
  const [todo, setTodo] = useState("")

  const [todos, setTodos] = useState<ITodo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [message, setMessage] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      const newTodo = {
        id: Date.now(),
        todo,
        isDone: false,
        createdAt: new Date().toISOString() 
      };
      setTodos([...todos, newTodo]);
      setTodo("");
      setMessage("✅ Tâche ajoutée avec succès !");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter(todo =>
    filter === "all" ? true :
    filter === "done" ? todo.isDone :
    !todo.isDone
  );

  return (
    <div className='App'>
      {message && <div className="success-message">{message}</div>}
      <span className='Heading'>Gestion des tâches</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <div className="filters">
        <button onClick={() => setFilter("all")}>Tous</button>
        <button onClick={() => setFilter("active")}>À faire</button>
        <button onClick={() => setFilter("done")}>Terminées</button>
      </div>
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  )
}

export default App
