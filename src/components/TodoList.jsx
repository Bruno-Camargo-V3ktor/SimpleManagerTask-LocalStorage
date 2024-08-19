import '../styles/TodoList.css'
import { AiOutlinePlus } from 'react-icons/ai';

import Todo from './Todo';
import { useState } from 'react';


const TodoList = (props) => {

    //Atributos

    //Estados
    const [todos, setTodos] = useState( [
        {title: "Aprender React", id: 0}
    ] );

    const [inputTask, setInputTask] = useState("");

    //Métodos
    function deleteTodo(id) {
        const t = [...todos].filter( (todo) => todo.id !== id )
        setTodos(t)
    }

    function createTodo(name) {
        if(name === "") return

        console.log(name);
        
        const t = [...todos]
        t.push( {title: name, id: t.length} )

        setTodos(t)
        setInputTask("")
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
                { todos.map( (todo) => <Todo key={todo.id} {...todo} onDeleteTodo={ deleteTodo } /> ) }
            </div>

        </div>
    )

}

export default TodoList;