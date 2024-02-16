import { AxiosInstance } from "axios";

import { counterReducerName, ICounterSchema } from "../../../../entities/Counter";
import { IProductSchema, productNameReducer } from "../../../../entities/Product";

export interface StateSchema{
    [counterReducerName]:ICounterSchema;
    [productNameReducer]:IProductSchema;

}
export  interface ThunkExtraArg{
    api:AxiosInstance
}

export interface  ThunkConfig<T>{
    rejectValue:T;
    extra:ThunkExtraArg;
    state:StateSchema
}