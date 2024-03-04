<<<<<<< HEAD
import { IProduct } from "../../../../entities/Product";

export const getProductInfoMapper = (product: TNullable<IProduct>) => {

    if (!product) {
        return [];
    }

    return [
        [
            "Цена",
            product.price
        ],
        [
            "Старая цена",
            product.oldPrice
        ],
        [
            "Категория",
            product.category
        ],
        [
            "Ватсапп/Телефон",
            "+996509503509"
        ]
    ];
=======
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
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
};