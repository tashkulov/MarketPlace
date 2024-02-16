import { createSlice } from "@reduxjs/toolkit";

import { ICounterSchema } from "../types/counter";


const initialState:ICounterSchema={
    value:0
};
const counterSlice=createSlice({
    initialState,
    name:"counter",
    reducers:{
        increment:(state)=>{
            state.value++;
        },
        decrement:(state)=>{
            state.value--;

        },
        reset:(state)=>{
            state.value=initialState.value;
        }
        
    }
});

export const {
    name:counterReducerName,
    actions: counterActions,
    reducer:counterReducer
}=counterSlice;