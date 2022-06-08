import React from 'react'
import TodoItems from './TodoItems'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../redux/todoSlice'
import { useState } from 'react'
import nextId from "react-id-generator";
import { useRef, useEffect } from 'react'



function Todo() {
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus()
    }, [])
    

    let dispatch = useDispatch()
    let todos = useSelector(state => state.todos)

    const [title, setTitle] = useState('')
    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleAddClick = () => {
        console.log(title)
        let id = nextId();
        if (title.length!==0) {
            dispatch(addTodo({
                id: id,
                title: title,
                completed: false
            }))
        }
        setTitle("")
        document.getElementById('form').reset();
    }

    const handleDeleteClick = (id) => {
        dispatch(deleteTodo({ id }))
    }


    return (
        <>
            <div className="container my-4 todo1">
                <h1 className='text-start'>TODO List - Redux</h1>
                    <div className="row">
                        <div className="col-md-9">
                            <form action="" id='form'>
                                <input ref={inputRef} onChange={handleChange} type="text" placeholder='Add new todo...' />
                            </form>
                        </div>
                        <div className="col-md-3">
                            <button className="btn add btn-primary" onClick={handleAddClick}>Add Todo</button>
                        </div>
                </div>
            </div>
            <div className="container todo2">
                <div className="row my-4">
                    <h2 className='text-start'>Your Schedule </h2>
                    <div className="col-md-12">
                        {
                            todos.length === 0 ? <p className='text-start'>Currently you don't have any schedule</p> : todos.map((todo, index) => {
                                return <TodoItems delete={handleDeleteClick} todo={todos} key={index} id={todo.id} title={todo.title} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo