import { createSlice } from "@reduxjs/toolkit";

import { ICounterSchema } from "../types/counter";


<<<<<<< HEAD
const initialState: ICounterSchema = {
    value: 0
};

const counterSlice = createSlice({
    initialState,
    name: "counter",
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = initialState.value;
        }
    }
});

export const { 
    name: counterReducerName,
    reducer: counterReducer,
    actions: counterActions
} = counterSlice;
=======
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
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
