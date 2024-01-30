import React, { useEffect, useRef, useState } from 'react'
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
    /**Les codes codes qui permttenet de modifier un todo*/
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, todo: editTodo } : todo))
        setEdit(false);
    }


    /**Cette fonction permet de modifier le status d'un todo*/
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        );
    }
    /**La fonction qui permet de supprimer un todo*/
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    /**Ici je cree une variable qui va nous permettre de referencer notre champ input*/
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])


    return (
        <form className='single-todo-form' onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? (
                <input
                    ref={inputRef}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className='todo-text'
                />
            ) :
                todo.isDone ? (
                    <s className='todo-text'>{todo.todo}</s>
                ) : (
                    <span className='todo-text'>{todo.todo}</span>
                )
            }

            <div>
                <span className='icon' onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className='icon' onClick={() => handleDelete(todo.id)}>
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
