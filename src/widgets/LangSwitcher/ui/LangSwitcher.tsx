import React from 'react';
import { useTranslation } from "react-i18next";
<<<<<<< HEAD

import { Button } from "../../../shared/ui/Button/Button";

const LangSwitcher = ({ isCollapsed }: { isCollapsed: boolean }) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    
    return (
        <Button
            onClick={toggle}
        >
            {isCollapsed ? t("Короткий язык") : t("Язык")}
        </Button>
=======
import { MdOutlineLanguage } from "react-icons/md";

import { Button } from "../../../shared/ui/Button/Button";

const LangSwitcher = ({ isCollapsed }:{isCollapsed:boolean}) => {
    const { t,i18n }=useTranslation();
    const toggle=()=>{
        i18n.changeLanguage(i18n.language==="ru" ? "en" :"ru");
    };
    return (
        <div>
            <Button onClick={toggle}>

                

                {isCollapsed?<MdOutlineLanguage />
                    :t("Язык")}
            </Button> 
        </div>
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
    );
};

export default LangSwitcher;