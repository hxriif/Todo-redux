import { configureStore } from "@reduxjs/toolkit";
// import todostore from "./Todo";
import Todo from "./Todo";


export const store = configureStore({
    reducer:{
        list:Todo
    }
})