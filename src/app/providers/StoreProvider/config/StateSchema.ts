import { AxiosInstance } from "axios";

import { counterReducerName, ICounterSchema } from "../../../../entities/Counter";
<<<<<<< HEAD
import { productReducerName, IProductSchema } from "../../../../entities/Product";
import { userReducerName, IUserSchema } from "../../../../entities/User";
import { authByUsernameReducerName, TAuthByUsernameSchema } from "../../../../features/AuthByUsername";
import { productSearchReducerName,IProductSearchSchema } from "../../../../features/ProductSearch";

export interface StateSchema {
    [counterReducerName]: ICounterSchema;
    [productReducerName]: IProductSchema;
    [userReducerName]: IUserSchema;
    [authByUsernameReducerName]: TAuthByUsernameSchema;
    [productSearchReducerName]:IProductSearchSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema
=======
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
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
}