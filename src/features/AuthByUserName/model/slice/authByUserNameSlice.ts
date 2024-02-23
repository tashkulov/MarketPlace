import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { loginByUserName } from "../services/loginByUserName";
import { registerByUserName } from "../services/registerByUserName";
import { TAuthByUserNameSchema } from "../types/authByUserName";

const initialState:TAuthByUserNameSchema={
    username:"",
    password:"",
    error:null,
    isLoading :false
};

const authByUserNameSlice =createSlice({
    name:"authByUserName",
    initialState,
    reducers:{
        set:(state,action:PayloadAction<{field:"username" | "password",value:string}>)=>{
            const { field,value }=action.payload;
            state[field]=value;
        },
        
    },
    
    extraReducers:(builder)=>{
        builder
            .addCase(loginByUserName.pending,(state) => {
                state.isLoading=true;
            })
            .addCase(loginByUserName.fulfilled,(state) => {
                state.isLoading=false;
            })
            .addCase(loginByUserName.rejected,(state) => {
                state.isLoading=false;
            })
            .addCase(registerByUserName.pending,(state) => {
                state.isLoading=true;
            })
            .addCase(registerByUserName.fulfilled,(state) => {
                state.isLoading=false;
            })
            .addCase(registerByUserName.rejected,(state) => {
                state.isLoading=false;
            });
    }
});


export const {
    name:authByUsernameReducerName,
    actions:authByUsernameAction,
    reducer:authByUserNameReducer
}=authByUserNameSlice;