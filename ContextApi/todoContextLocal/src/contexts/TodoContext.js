import { createContext, useContext } from "react";

export const TodoContext = createContext({

    // here the below todo is an array which will store the todos as objects with the following properties.
    todos:[
        {
            id:1,
            todo : "Todo msg",
            completed: false
        }
    ],
    // as in earlier project, we have seen that in the context we have beem passing variable that would expect string value, or a method which was declared but with no implementation i.e, when using the context we will get the access of of those methods but the implementation can be in any file like App.jsx or main.jsx
    
    // similaryly here, todos is an array that expects object value and addTodo is a method that takes totoTile as input
    addTodo : (todo) => {},
    updatedTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},

});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider