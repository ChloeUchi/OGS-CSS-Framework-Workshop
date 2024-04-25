import { createSlice } from "@reduxjs/toolkit";
// import Counter from "../../components/Counter";

type initialValues ={
    username: any;
    value:number
}
const initialValue:initialValues={
    value:0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState:initialValue,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state,action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer