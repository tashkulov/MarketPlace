import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/StateSchema";
import { IProduct } from "../../../../../entities/Product";
<<<<<<< HEAD
import { userActions } from "../../../../../entities/User";
import { USER_LOCAL_STORAGE_KEY } from "../../../../../shared/consts/localStorage";

export const toggleProductFavorite = createAsyncThunk<
    IProduct,
    {id:number,productFavorites:number[]},
    ThunkConfig<string>
>(
    "product/toggleProductFavorite",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue ,dispatch } = thunkAPI;
        try {
            const response =await extra.api.put("/users",data);
            if(!response.data){
                throw  new  Error();
            }
            dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(USER_LOCAL_STORAGE_KEY,JSON.stringify(response.data));
            
            return response.data;
        } catch (error) {
            return rejectWithValue("Error");
        }
    }
);
=======

const toggleProductFavorite=createAsyncThunk<
    IProduct,
    number,
    ThunkConfig<string>
>("product/toggleProductFavorite",
    async (id,thunkAPI)=>{
        const { extra,rejectWithValue }=thunkAPI;
        
        try {
            return {} as any;
            // eslint-disable-next-line no-unreachable
        }catch (error) {
            return rejectWithValue("Ошибка блять!!!ебанутый шо ли ?");
        }
    });
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
