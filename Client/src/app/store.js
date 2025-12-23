import { configureStore } from "@reduxjs/toolkit"
import loggedInUserReducer from '../slice/userSlice.js'

export const store = configureStore({
    reducer : {
    loggedInUser : loggedInUserReducer,
    }
})