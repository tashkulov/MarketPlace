import React from 'react';

import cls from "./ProductList.module.scss";
import { IProduct } from "../../../entities/Product";
import { classNames } from "../../../shared/lib/classNames/classNames";
<<<<<<< HEAD
import { Loader } from "../../../shared/ui/Loader/Loader";

interface IProductProps {
    render: (item: IProduct) => React.ReactElement;
    list: IProduct[]
    isLoading: boolean
}

const ProductList = (props: IProductProps) => {
    const { render, list, isLoading } = props;

    if (isLoading) {
        return <div className={cls.loader}><Loader /></div>;
    }

    if (!list.length) {
        return <div>Nety towarov v nalichii</div>;
=======



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

>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
    }

    return (
        <div className={classNames(cls.ProductList)}>
            <ul>
<<<<<<< HEAD
                {list.map((item) => <li>{render(item)}</li>)}
=======
                {list.map(item=>
                    <li>{render(item)}</li>
                )}
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
            </ul>
        </div>
    );
};

export default ProductList;