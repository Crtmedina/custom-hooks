

export const todoReducer = ( initialState = [] , action ) => {
    
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload ); // Esto significa que se mantienen todas las tareas cuyo id sea diferente al id de la tarea que se quiere eliminar. Por lo tanto, se elimina la tarea que coincida con el id especificado en action.payload.
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                
                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                
                return todo;
            });
        default:
            return initialState;
    }
}