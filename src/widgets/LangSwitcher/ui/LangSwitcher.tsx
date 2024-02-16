import React from 'react';
import { useTranslation } from "react-i18next";
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
    );
};

export default LangSwitcher;