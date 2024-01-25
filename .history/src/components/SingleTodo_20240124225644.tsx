import React from 'react'
import { ITodo } from '../todo.model'
import { AiFillEdit } from 'react-icons/ai'

interface Props {
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
                    <AiFillEdit />
                </span>
                <span className='icon'>
                    
                </span>
                <span className='icon'></span>
            </div>
        </form>
    )
}

export default SingleTodo
