import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';


const init = () => { // SI ESTO TIENE ALGUN VALOR LO MOSTRARA SINO MANDARA UN ARREGLO VACIO
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init );

    useEffect(() => {    
        localStorage.setItem('todos', JSON.stringify( todos ) );   // guardamos los arreglos en el local storage del navegador
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id        
        })
    }

    return{
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter ( todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
