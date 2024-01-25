import React from 'react'
import { ITodo } from '../todo.model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './styles.css'

interface Props {
    todo: ITodo,
    todos: ITodo[],
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    return (
        <form className='single-todo-form'>
            <span className='todo-text'>{todo.todo}</span>
            <div>
                <span className='icon'>
                    <AiFillEdit />
                </span>
                <span className='icon'>
                    <AiFillDelete />
                </span>
                <span className='icon' onClick={()=>hand}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo