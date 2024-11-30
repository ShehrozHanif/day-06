import {configureStore} from "@reduxjs/toolkit"
import todoReucer from "../features/todo/todosSice"

export const store = configureStore({
    reducer: todoReucer
})