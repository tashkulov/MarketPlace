import React, { FC } from 'react';
import { useTranslation } from "react-i18next";

import { AppLink } from "../../../../shared/ui/AppLink/AppLink";
<<<<<<< HEAD
import { TSidebarItem } from "../../model/types/sidebar";

interface ISidebarItemProps {
    item: TSidebarItem;
    isCollapsed: boolean;
    className: string;
}

const SidebarItem: FC<ISidebarItemProps> = (props) => {
    const { t } = useTranslation();

    const { item, isCollapsed, className } = props;

=======
import { TSidebarItem } from "../../model/types/Sidebar";

interface  ISidebarItemProps{
    item:TSidebarItem,
    isCollapsed:boolean,
    className:string
}
const SidebarItem:FC<ISidebarItemProps> = (props) => {
    const { t }=useTranslation();
    
    const { item,isCollapsed,className }=props;
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
    return (
        <AppLink className={className} to={item.href}>
            <item.Icon />
            {!isCollapsed && t(item.title)}
        </AppLink>
    );
};

export default SidebarItem;