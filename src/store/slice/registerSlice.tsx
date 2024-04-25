// import React from 'react'
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialtype = {
    username: string,
    email: string,
    password: string
}
const initialValue = (): initialtype => {
    return {
        username: '',
        email: '',
        password: ''
    }
}
export const registerSlice = createSlice({
    name: 'registerForm',
    initialState: { value: initialValue() },
    reducers: {
        addForm(state, action: PayloadAction<initialtype>) {
            state.value = { ...state.value, ...action.payload }
        },
        clearForm(state) {
            state.value = initialValue()
        }
    }

})

export const { addForm,clearForm } = registerSlice.actions

export default registerSlice.reducer