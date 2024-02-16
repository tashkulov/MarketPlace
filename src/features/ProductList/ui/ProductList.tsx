import React from 'react';

import cls from "./ProductList.module.scss";
import { IProduct } from "../../../entities/Product";
import { classNames } from "../../../shared/lib/classNames/classNames";



interface IProductListProps{
    render:(item:IProduct)=>React.ReactElement,
    list:IProduct[],
    isLoading:boolean
}
const ProductList = (props:IProductListProps) => {
    const { render,list,isLoading }=props;

    if(isLoading){
        return <div>Загрузка...</div>;
    }
    if(!list.length){
        return <div>Нету товоров в наличии</div>;

    }

    return (
        <div className={classNames(cls.ProductList)}>
            <ul>
                {list.map(item=>
                    <li>{render(item)}</li>
                )}
            </ul>
        </div>
    );
};

export default ProductList;