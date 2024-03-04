import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../app/providers/StoreProvider/config/StateSchema";
import { userActions } from "../../../../entities/User";
import { IUser } from "../../../../entities/User/model/types/user";
import { USER_LOCAL_STORAGE_KEY } from "../../../../shared/consts/localStorage";
import { TUserData } from "../types/authByUserName";

export const loginByUserName=createAsyncThunk<
    IUser,
    TUserData,
    ThunkConfig<string>
>(
    'authByUserName/login',
    async(data,thunkAPI)=>{
        const { rejectWithValue,extra,dispatch }=thunkAPI;
        try{
            const response= await extra.api.post("/login", data);
            if(!response.data){
                throw new Error();
            }
            dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, response.data);
            return response.data;
        }catch(error){
            return rejectWithValue("Авторизация не прошла ");
        }

    }
);