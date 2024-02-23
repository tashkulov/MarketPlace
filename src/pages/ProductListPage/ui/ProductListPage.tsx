import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

import { getProductList, IProduct, productSelectors } from "../../../entities/Product";
import { ProductCard } from "../../../features/ProductCard";
import { ProductFavorite } from "../../../features/ProductFavorite";
import { ProductList } from "../../../features/ProductList";
import { ProductSearch } from "../../../features/ProductSearch";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";

const ProductListPage = () => {
    const dispatch=useAppDispatch();
    const isLoading=useSelector(productSelectors.getProductListIsLoading);
    const list =useSelector(productSelectors.getProductListData);

    useEffect(()=>{
        dispatch(getProductList());
    },[dispatch]);
    return (
        <>
            <ProductSearch/>
            <ProductList

                isLoading={isLoading}

                list={list}

                render={(item:IProduct)=>(

                    <ProductCard
                        item={item}
                        withFavorite={<ProductFavorite
                            id={item.id}/>}
                    />

                )}
            />
        </>
     
    );
};

export default ProductListPage;