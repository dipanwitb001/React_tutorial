import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:1, text: "Hello world"}],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,

    // reducers has properties and functions
    reducers:{

        // this works in exact same way(this the syntax)
        addTodo : (state, action) => {

            // todo will be get from action so to bring todo we have to describe it as object as defined earlier(which is an array of objects)
            const todo = {
                id:nanoid(),  // unique id is genereated using this function
                text: action.payload //to receive text which is sent to action(as received from the user)
            }

            // initialstate was in state, whenever new todo is fetched it is sent to state (object)(which represents the current state)
            state.todos.push(todo)
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export  const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer