import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid - it is a keyword used for generating unique id

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

export const todoSlice = createSlice({  //? syntax of slice (below)  
    name: 'todo',                       //name of the slice
    initialState,                       // Initial state    
    reducers: {                         // all the reducer functions and actions go here  //?  Reducers Contain the logic for changing the state (like adding or removing todos) 
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload    //action.payload is how you pass user input (or any data) into a Redux reducer.
            }
            state.todos.push(todo)      //state.todos accesses the array inside the state.    

        },  //addTodo:(state, action)={}//? state and action are the two thing that we get access to
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) //filter only gives true values
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions // this line means export "only" the actions addtodo and removetodo so that we can use them anywhere in our program
export default todoSlice.reducer //this means export the reducer function which is inside the todoslice 