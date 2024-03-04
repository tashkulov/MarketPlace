<<<<<<< HEAD
import React from 'react';
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            {t("Главная страница")}
        </div>
    );
};

=======
import React from 'react';
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t }=useTranslation();
    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
export default MainPage;