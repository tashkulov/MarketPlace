<<<<<<< HEAD
import React, { useCallback, useMemo, useState } from 'react';
import { CgProfile } from  "react-icons/cg";
import { IoLogoNpm } from "react-icons/io";
import { useSelector } from "react-redux";

import cls from './Sidebar.module.scss';
import { getAuthData, userActions } from "../../../../entities/User";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Dropdown } from "../../../../shared/ui/Popups/components/Dropdown/Dropdown";
import { LangSwitcher } from "../../../LangSwitcher";
import { ThemeSwitcher } from "../../../ThemeSwitcher";
import { getDropdownItems } from "../../model/selectors/getDropdownItems";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import SidebarItem from "../SidebarItem/SidebarItem";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const dispatch=useAppDispatch();
    const auth=useSelector(getAuthData);
    const toggle = () => {
        setIsCollapsed(prev => !prev);
    };
    const onLogout=useCallback(()=>{
        dispatch(userActions.logout());
    },[dispatch]);

    const items = useMemo(() => getSidebarItems(), []);
    const dropdownItems=useMemo(()=>{
        return getDropdownItems({
            isAuth:!!auth,
            onLogout
        });
    },[auth,onLogout]);

    return (
        <aside className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed })}>
            <div className={cls.logo}>
                <IoLogoNpm size={40}/>
            </div>
            <div className={cls.profile}>
                <Dropdown items={dropdownItems} trigger={<CgProfile  color="white"/>}/>
            </div>
            <nav className={cls.list}>
                {items.map((item) => (
                    <SidebarItem
                        className={cls.item}
                        isCollapsed={isCollapsed}
=======
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
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
                        key={item.href}
                        item={item}
                    />
                ))}
            </nav>
            <div
                className={cls.collapsedBtn}
                onClick={toggle}
            >
<<<<<<< HEAD
                {isCollapsed ? ">" : "<"}
            </div>
            <div className={cls.switchers}>
                <LangSwitcher isCollapsed={isCollapsed}/>
                <ThemeSwitcher isCollapsed={isCollapsed}/>
            </div>
        </aside>
=======
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

>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
    );
};

export default Sidebar;