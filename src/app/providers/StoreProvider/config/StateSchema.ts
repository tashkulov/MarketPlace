import { AxiosInstance } from "axios";

import { counterReducerName, ICounterSchema } from "../../../../entities/Counter";
import { IProductSchema, productNameReducer } from "../../../../entities/Product";
import { IUserSchema, userReducerName } from "../../../../entities/User";
import { authByUsernameReducerName, TAuthByUserNameSchema } from "../../../../features/AuthByUserName";

export interface StateSchema{
    [counterReducerName]:ICounterSchema;
    [productNameReducer]:IProductSchema;
    [userReducerName]:IUserSchema
    [authByUsernameReducerName]:TAuthByUserNameSchema;
    

}
export  interface ThunkExtraArg{
    api:AxiosInstance
}

export interface  ThunkConfig<T>{
    rejectValue:T;
    extra:ThunkExtraArg;
    state:StateSchema
}