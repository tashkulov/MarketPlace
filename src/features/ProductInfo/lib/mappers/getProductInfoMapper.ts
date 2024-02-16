import { IProduct } from "../../../../entities/Product";

export const getProductInfoMapper=(product:IProduct)=>{
    return [
        [
            "Цена",
            product.price
        ],
        [
            "Старая Цена",
            product.oldPrice
        ],
        [
            "Категория",
            product.category
        ],
        [
            "Ватсапп/Телефон",
            "996509503509"
        ],


    ];
};