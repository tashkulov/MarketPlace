import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/StateSchema";
import { IProduct } from "../../types/product";


<<<<<<< HEAD
export const getProductById = createAsyncThunk<
=======
export const getProductById=createAsyncThunk<
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
    IProduct,
    number,
    ThunkConfig<string>
>(
<<<<<<< HEAD
    "product/getProductById",
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        
        try {
            const response = await extra.api.get<IProduct>(`/products/${id}`);
            
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue("Произошла ошибка");
=======
    "/product/getProductById",
    async (id,thunkAPI)=>{
        const { extra,rejectWithValue }=thunkAPI;
        try {
            const response=await extra.api.get<IProduct>(`/products/${id}`);
            if(!response.data){
                throw new Error();
            }
            return response.data;
        }catch (e){
            return rejectWithValue("Произошла Ошибка"!);
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
        }
    }
);