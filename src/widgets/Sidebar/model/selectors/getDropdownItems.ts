import { DropdownItem } from "../../../../shared/ui/Popups/components/Dropdown/Dropdown";


type TGetDropDownItemsProps={
    onLogout:()=>void;
    isAuth:boolean;
};

export const getDropdownItems=(props:TGetDropDownItemsProps):DropdownItem[]=>{
    const {
        onLogout,
        isAuth
    }=props;


    return isAuth? [
        {
            content:'Профиль',
            href:"/profile"
        },
        {
            content:'Выйти',
            onClick:onLogout

        }
    ]:[{
        content:"Войти",
        href:"/auth"
    }];

};