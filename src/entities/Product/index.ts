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