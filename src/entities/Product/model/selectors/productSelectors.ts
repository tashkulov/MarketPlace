import { createSelector } from "@reduxjs/toolkit";

import { StateSchema } from "../../../../app/providers/StoreProvider";

<<<<<<< HEAD
const getProductStore = (state: StateSchema) =>
    state.product;

// LIST
const getProductList = createSelector(
    getProductStore,
    productState => productState.list
);

const getProductListIsLoading = createSelector(
    getProductList,
    list => list.isLoading
);

const getProductListData = createSelector(
    getProductList,
    list => list.data
);

const getProductListError = createSelector(
    getProductList,
    list => list.error
);

// CURRENT
const getProductCurrent = createSelector(
    getProductStore,
    productState => productState.current
);

const getProductCurrentIsLoading = createSelector(
    getProductCurrent,
    current => current.isLoading
);

const getProductCurrentData = createSelector(
    getProductCurrent,
    current => current.data
);

const getProductCurrentError = createSelector(
    getProductCurrent,
    current => current.error
);


// TOTAL COUNT
const getProductTotalCount = createSelector(
    getProductStore,
    state => state.totalCount
);

// PAGE
const getProductPage = createSelector(
    getProductStore,
    state => state.page
);

// SIZE
const getProductSize = createSelector(
    getProductStore,
    state => state.size
);

// VIEW TYPE
const getProductViewType = createSelector(
    getProductStore,
    state => state.viewType
);

export const productSelectors = {
=======


const getProductStore=(state:StateSchema)=>state.product;


// LIST
const getProductList=createSelector(
    getProductStore, 
    productState=>productState.list
);

const getProductListIsLoading=createSelector(
    getProductList,
    list=>list.isLoading
);

const getProductListData=createSelector(
    getProductList,
    list=>list.data
);
const getProductListError=createSelector(
    getProductList,
    list=>list.error
);
// Current
const getProductCurrent=createSelector(
    getProductStore,
    productState=>productState.current
);

const getProductCurrentIsLoading=createSelector(
    getProductCurrent,
    current=>current.isLoading
);

const getProductCurrentData=createSelector(
    getProductCurrent,
    current=>current.data
);
const getProductCurrentError=createSelector(
    getProductCurrent,
    current=>current.error
);

// totalCount

const getProductTotalCount=createSelector(
    getProductStore,
    state=>state.totalCount
);

// page
const getProductPage=createSelector(
    getProductStore,
    state=>state.page
);
// size
const getProductSize=createSelector(
    getProductStore,
    state=>state.size
);
// viewType
const getProductViewType=createSelector(
    getProductStore,
    state=>state.viewType
);

export const productSelectors={
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
    getProductListIsLoading,
    getProductListData,
    getProductListError,
    getProductCurrentIsLoading,
    getProductCurrentData,
    getProductCurrentError,
    getProductTotalCount,
    getProductPage,
    getProductSize,
    getProductViewType
};