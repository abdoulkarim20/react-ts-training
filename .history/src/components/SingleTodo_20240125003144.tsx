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
    /**Cette fonction permet de modifier le status d'un todo*/
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => todo.id === id ?{...todo,is})
        )
    }
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
                <span className='icon' onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo
