<<<<<<< HEAD
import React, { PropsWithChildren } from 'react';
import { Provider } from "react-redux";

import { createReduxStore } from "../config/store";

type TStoreProviderProps = {

} & PropsWithChildren

const StoreProvider = ({ children }: TStoreProviderProps) => {

    const store = createReduxStore();

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

=======
import React, { PropsWithChildren } from 'react';
import { Provider } from "react-redux";

import { createReduxStore } from "../config/store";


type TStoreProviderProps={
    
}& PropsWithChildren
const StoreProvider = ({ children }:TStoreProviderProps) => {
    const store=createReduxStore();
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
export default StoreProvider;