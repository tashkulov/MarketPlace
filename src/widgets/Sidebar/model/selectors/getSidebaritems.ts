import { IoHeartHalfSharp, IoHomeSharp } from "react-icons/io5";

import { TSidebarItems } from "../types/Sidebar";

export const  getSidebaritems=():TSidebarItems=>{
    return[
        {
            title:"Главная страница",
            href:"/",
            Icon:IoHomeSharp
        } ,
        {
            title:"Список товаров",
            href:"/product-list",
            Icon:IoHeartHalfSharp

        }
    ];
};