import React from 'react';
import { useTranslation } from "react-i18next";
import { BiAdjust } from "react-icons/bi";

import { Theme, useTheme } from "../../../app/providers/ThemeProvider";
<<<<<<< HEAD
import { Button } from "../../../shared/ui/Button/Button";

const ThemeSwitcher = ({ isCollapsed }: { isCollapsed: boolean }) => {
    const { t } = useTranslation();
    const { theme, toggleTheme } = useTheme();

    const title = theme === Theme.DARK
        ? t("Темная")
        : t("Светлая");
    
=======
import { Button } from '../../../shared/ui/Button/Button';

const ThemeSwitcher = ({ isCollapsed }:{isCollapsed:boolean}) => {
    const { t }=useTranslation();
    const { theme,toggleTheme }=useTheme();
    const title=theme===Theme.DARK?t("Тёмная"):t("Светлая");
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
    return (
        <Button
            onClick={toggleTheme}
        >
            {
                isCollapsed
<<<<<<< HEAD
                    ? <BiAdjust />
                    : title
            }
=======
                    ?<BiAdjust/>
                    :title}

>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
        </Button>
    );
};

export default ThemeSwitcher;