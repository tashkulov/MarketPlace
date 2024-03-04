import React, { useMemo } from 'react';

<<<<<<< HEAD
import cls from './ProductInfo.module.scss';
import { IProduct } from "../../../entities/Product";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Loader } from "../../../shared/ui/Loader/Loader";
import { getProductInfoMapper } from "../lib";

interface IProductInfoProps {
    product: TNullable<IProduct>;
    isLoading: boolean;
}

const ProductInfo = (props: IProductInfoProps) => {
    
    const { product, isLoading } = props;
    
    const data = useMemo(() => getProductInfoMapper(product), [product]);

    if (isLoading) {
        return <div className={cls.loader}><Loader /></div>;
    }

    if (!product) return null;
    
    return (
        <div className={classNames(cls.ProductInfo)}>
            <div className={cls.leftSide}>
                <img src={product.images[0]} alt=""/>
            </div>
            <div className={cls.rightSide}>
=======
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
                
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
                <span className={cls.title}>
                    {product.title}
                </span>
                <p className={cls.description}>
                    {product.description}
                </p>
                <ul>
<<<<<<< HEAD
=======

>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
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
<<<<<<< HEAD
=======

>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
        </div>
    );
};

export default ProductInfo;