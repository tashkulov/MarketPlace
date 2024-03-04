<<<<<<< HEAD
import React, { useLayoutEffect } from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductById, productSelectors } from "../../../entities/Product";
import { ProductInfo } from '../../../features/ProductInfo';
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";

const ProductDetailsPage = () => {
    const product = useSelector(productSelectors.getProductCurrentData);
    const isLoading = useSelector(productSelectors.getProductCurrentIsLoading);
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useLayoutEffect(() => {
        if (id) {
            dispatch(getProductById(+id));
        }
    }, [dispatch, id]);


    return (
        <ProductInfo isLoading={isLoading} product={product} />
    );
};

=======
import React, { useLayoutEffect } from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductById, productSelectors } from "../../../entities/Product";
import { ProductInfo } from "../../../features/ProductInfo";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";

const ProductDetailsPage = () => {
    const product=useSelector(productSelectors.getProductCurrentData);
    const dispatch=useAppDispatch();
    const { id }=useParams();

    useLayoutEffect(() => {
        if(id){
            dispatch(getProductById(+id));
            
        }
    }, [dispatch,id]);
    if(!product)return  null;

    return (
        <ProductInfo product={product}/>
    );
};

>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
export default ProductDetailsPage;