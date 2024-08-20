import '../styles/TodoList.css'
import { AiOutlinePlus } from 'react-icons/ai';

import Todo from './Todo';
import { useContext, useEffect, useState } from 'react';
import { StorageContext } from '../contexts/StorageContext';
import { toBeDisabled } from '@testing-library/jest-dom/matchers';


const TodoList = (props) => {

    //Atributos
    const storageContext = useContext(StorageContext)
    const { getTodos: getTodosMemory, setTodos: setTodosMemory } = storageContext;
    

    //Estados
    const [todos, setTodos] = useState( [] );
    const [inputTask, setInputTask] = useState("");

    // Effect
    useEffect( () => { setTodos( getTodosMemory() ) }, [getTodosMemory] )

    //Métodos
    function deleteTodo(id) {
        const t = [...todos].filter( (todo) => todo.id !== id )
        
        setTodos(t)
        updateList(t)
    }

    function createTodo(name) {
        if(name === "") return
        
        const t = [...todos]
        t.push( {title: name, id: t.length+1, date: new Date(), done: false} )

        setTodos(t)
        setInputTask("")

        updateList(t)
    }

    function updateTodo(todo) {
        const td = [...todos].map( (t) => t.id===todo.id ?  todo : t)

        setTodos(td)
        updateList(td)
    }

    function updateList(t) {
        setTodosMemory(t)
    }

    //Render
    return(
        <div className="TodoListContainer">

            <div className='BtnAddContainer'>

                <input 
                  className='inputTaskName'  
                  type='text'
                  value={inputTask}
                  onChange={ (event) => setInputTask(event.target.value) }
                  placeholder='Nome da tarefa...'
                />

                <button className='btnAddTask' onClick={ () => createTodo(inputTask) }>
                    <AiOutlinePlus size={30} color='black'/>
                </button>

            </div>

            <div className='ListContainer'>

                <div className='ListUnfinished'>
                    { todos.map( (todo) => !todo.done ? <Todo key={todo.id} {...todo} onDeleteTodo={ deleteTodo } onUpdateTodo= {updateTodo}  /> : false) }
                </div>

                <div className='ListFinished'>
                    { todos.map( (todo) => todo.done ? <Todo key={todo.id} {...todo} onDeleteTodo={ deleteTodo } onUpdateTodo= {updateTodo}  /> : false)  }
                </div>

            </div>

        </div>
    )

}

export default TodoList;