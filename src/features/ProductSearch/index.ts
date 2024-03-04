import ProductSearch from "./ui/ProductSearch";

export {
    ProductSearch,
};


export type {
    IProductSearchSchema
} from  './model/types';


export {
    productSearchReducer,
    productSearchActions,
    productSearchReducerName
} from  './model/slice';


export {
    productSearchSelectors
} from './model/selectors';