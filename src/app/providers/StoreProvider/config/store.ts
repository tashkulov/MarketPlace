import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { counterReducer, counterReducerName } from "../../../../entities/Counter";
import { productNameReducer, productReducer } from "../../../../entities/Product";
import { userReducer, userReducerName } from "../../../../entities/User";
import { authByUserNameReducer, authByUsernameReducerName } from "../../../../features/AuthByUserName";
import { $api } from "../../../../shared/api/api";

export  function createReduxStore(){
    const rootReducer:ReducersMapObject<StateSchema>={
        [counterReducerName]:counterReducer,
        [productNameReducer]:productReducer,
        [userReducerName]:userReducer,
        [authByUsernameReducerName]:authByUserNameReducer
    };
    const extraArg:ThunkExtraArg={
        api:$api
    };
    const store =configureStore({
        reducer:rootReducer,
        devTools:true,
        middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
            thunk:{
                extraArgument:extraArg
            }
        })
    });
    return store;
      
    
}

export type AppDispatch=ReturnType<typeof createReduxStore>["dispatch"]