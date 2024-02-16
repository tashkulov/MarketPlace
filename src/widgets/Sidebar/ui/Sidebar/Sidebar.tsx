import React, { useMemo, useState } from 'react';
import { useTranslation } from "react-i18next";
import { IoLogoNpm , IoMdArrowDroprightCircle  , IoMdArrowDropleftCircle } from "react-icons/io";

import cls from "./Sidebar.module.scss";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { LangSwitcher } from "../../../LangSwitcher";
import { ThemeSwitcher } from "../../../ThemeSwitcher";
import { getSidebaritems } from "../../model/selectors/getSidebaritems";
import SidebarItem from "../SidebarItem/SidebarItem";


const Sidebar = () => {
    const  [isCollapset,setIsCollapset]=useState<boolean>(false);
    const toggle=()=>{
        setIsCollapset(prev=>!prev);
    };
    const { t }=useTranslation();
    const  items=useMemo(()=>getSidebaritems(),[]);
    return (
        <aside className={classNames(cls.Sidebar,{ [cls.collapsed]:  isCollapset })}>
            <div className={cls.logo}>
                <IoLogoNpm  size={60}/>


            </div>
            <nav className={cls.list}>
                {items.map((item)=>(

                    <SidebarItem
                        className={cls.item}
                        isCollapsed={isCollapset}
                        key={item.href}
                        item={item}
                    />
                ))}
            </nav>
            <div
                className={cls.collapsedBtn}
                onClick={toggle}
            >
                {isCollapset ?
                    <IoMdArrowDroprightCircle size={30} />

                    : <IoMdArrowDropleftCircle size={30}/>
                }
            </div>
            <div className={cls.switchers}>
                <LangSwitcher isCollapsed={isCollapset}/>
                <ThemeSwitcher isCollapsed={isCollapset}/>
            </div>
        </aside>

    );
};

export default Sidebar;