import React from 'react'
import { ITodo } from '../todo.model'
type Props{
    todo: ITodo,
    todos: ITodo[],
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }) => {
    return (
        <form className=''>

        </form>
    )
}

export default SingleTodo
