import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../../app/providers/StoreProvider/config/StateSchema";
<<<<<<< HEAD
import { IProduct, IProductQueries } from "../../types/product";
=======
import { IProduct } from "../../types/product";
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b


export const getProductList =createAsyncThunk<
    IProduct[],
<<<<<<< HEAD
    IProductQueries,
    ThunkConfig<string>
>("product/getProductList",

    async (params, thunkAPI) => {
        const { extra,rejectWithValue } = thunkAPI;

        const queries:Record<string, string>={ ...params }; 
        
        try {
            const response = await extra.api.get<IProduct[]>(`/products?${new URLSearchParams(queries)}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue("Произошла ошибка"!);
=======
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
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
        }
    });