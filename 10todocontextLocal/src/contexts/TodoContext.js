import {createContext, useContext} from 'react'


// created context
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo:"Todo msg",
            completed:false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// always pass context to useContext like login page Card etc
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider