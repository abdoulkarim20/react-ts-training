import React from 'react'
import { ITodo } from '../todo.model'
type Props{
    todo: ITodo,
    todos: ITodo[],
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    return (
        <form className='signe-todo-form'>
            <span className='todo-text'>{todo.todo}</span>
            <div>
                <span className='icon'>
                    <Ai
                </span>
                <span></span>
                <span></span>
            </div>
        </form>
    )
}

export default SingleTodo