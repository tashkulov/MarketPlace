import React, { useMemo } from 'react';

import cls from "./ProductInfo.module.scss";
import { IProduct } from "../../../entities/Product";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { getProductInfoMapper } from "../lib";


interface  IProductInfoProps{
    product:IProduct;
}
const ProductInfo = (props:IProductInfoProps) => {
    const { product }=props;
    
    const data=useMemo(()=>getProductInfoMapper(product),[product]);
    return (
        <div className={classNames(cls.ProductInfo)}>
           
            <div className={classNames(cls.leftSide)}>
                <img src={product.images[0]} alt="" />
            </div>
            <div className={cls.rightSide}>
                
                <span className={cls.title}>
                    {product.title}
                </span>
                <p className={cls.description}>
                    {product.description}
                </p>
                <ul>

                    {data.map(([key, value]) => (
                        <li>
                            <span className={cls.key}>
                                {key}
                            </span>
                            <span className={cls.value}>
                                {value}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default ProductInfo;