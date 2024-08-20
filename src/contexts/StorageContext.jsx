import React, { createContext, useEffect } from 'react';

const StorageContext = createContext();

const StorageProvider = (props) => {

    //Atributos
    let todos = []

    // Effect
    useEffect( () => {
        const t = JSON.parse( localStorage.getItem('todos') )
        console.log(t);
        setTodos( ( t !== null ? t.map( (td) => { td.date = new Date(td.date); return td } ) : []) )
    })

    // Métodos
    function getTodos() { return [...todos] }
    function setTodos( newTodos ) {

        if(newTodos === null) {
            localStorage.setItem('todos', '[]')
            todos = []
            return
        }
        
        localStorage.setItem('todos', JSON.stringify(newTodos))
        todos = newTodos
    }

    // Render
    return (
        <StorageContext.Provider value={ {getTodos, setTodos} }>
            {props.children}
        </StorageContext.Provider>
    )   
}

export default StorageProvider;
export {StorageContext} ;