import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/StateSchema";
import { IProduct } from "../../types/product";


export const getProductList =createAsyncThunk<
    IProduct[],
    undefined,
    ThunkConfig<string>
>("product/getProductList",

    async (params,thunkAPI)=>{
        const { extra,rejectWithValue }=thunkAPI;

        try {
            const response = await extra.api.get<IProduct[]>("/products");
            if( !response.data){
                throw new Error();
            }
            return  response.data;
        }catch (error){
            return rejectWithValue(("Произошла ошибка"!));
        }
    });