<<<<<<< HEAD
import {
    IProduct,
    IProductSchema,
    EProductViewType,
    IProductQueries
} from "./model/types/product";

export type {
    IProduct,
    IProductSchema,
    IProductQueries
};

export {
    EProductViewType
};

export {
    productActions,
    productReducer,
    productReducerName
} from "./model/slice/productSlice";

export {
    productSelectors
} from "./model/selectors/productSelectors";

export { getProductList } from "./model/services/getProductList/getProductList";
export { getProductById } from "./model/services/getProductById/getProductById";
=======
import  { IProduct,IProductSchema,EProductViewType } from "./model/types/product";

export type{
    IProduct,
    IProductSchema

};
export {
    EProductViewType
};

export {
    productReducer,
    productActions,
    productNameReducer
} from "./model/slice/productSlice";

export {
    productSelectors
} from "./model/selectors/productSelectors";

export { getProductById }from './model/services/getProductById/getProductById';
export { getProductList }from './model/services/getProductList/getProductList';
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
