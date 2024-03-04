<<<<<<< HEAD
import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import cls from "./ProductCard.module.scss";
import { IProduct } from "../../../entities/Product";

interface IProductCardProps {
    item: IProduct
    withFavorite: React.ReactElement
}

const ProductCard = (props: IProductCardProps) => {
    const { item, withFavorite } = props;
    const navigate=useNavigate();
    const onNavigateProductDetails=useCallback(()=>{
        navigate(`/product_details/${item.id}`);
    },[item.id,navigate]);

    return (
        <div 
            onClick={onNavigateProductDetails}
            className={cls.ProductCard}
        >
=======
import React, { memo } from 'react';

import cls from "./ProductCard.module.scss";
import { IProduct } from "../../../entities/Product";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { AppLink } from "../../../shared/ui/AppLink/AppLink";


interface IProductCardProps{
    item:IProduct
    withFavorite:React.ReactElement;
}
const ProductCard = (props:IProductCardProps) => {
    const { item,withFavorite }=props;
    return (
        <AppLink
            to={`/product-details/${item.id}`}
            className={classNames(cls.ProductCard)} >
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
            <div className={cls.header}>
                <span>{item.title}</span>
                {withFavorite && withFavorite}
            </div>
<<<<<<< HEAD

            <span className={cls.description}>{item.description}</span>
            <div className={cls.footer}>
                <span className={cls.price}>{item.price}</span>
                <span className={cls.oldPrice}>{item.oldPrice}</span>
            </div>
        </div>
    );
};

export default ProductCard;
=======
            <span className={cls.description}>{item.description}</span>
            <div className={cls.footer}>
                <span className={cls.price}>{item.price}$</span>
                <span className={cls.oldPrice}>{item.oldPrice}$</span>
            </div>


        </AppLink>
    );
};

export default memo(ProductCard);
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
