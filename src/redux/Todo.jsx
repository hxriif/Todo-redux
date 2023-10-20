import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    todos:[],            
}

const sliceTodo = createSlice({
    name: "todo",  
    initialState:INITIAL_STATE,
    reducers:{   
        addTodo:(state,action)=>{
            state.todos.push({id:Date.now(),value:action.payload,editkey:true})
        },
        delecetTodo:(state,action)=>{
            const datadelect = state.todos.filter((item)=> item.id !== action.payload)
            state.todos=datadelect
        },
        editTodo: (state, action) => {
            return state.todos.find((item) => {
              if (item.id === action.payload) {
                item.editkey = false;
              }
            }
          },
        saveTodo: (state, action) => {
            return state.todos.find((item) => {
              if (item.id === action.payload.id) {
                item.value = action.payload.value;
                item.editkey = true;
              }
            });
          },
    }
})

export const {addTodo,delecetTodo,editTodo,saveTodo} = sliceTodo.actions
export default sliceTodo.reducer