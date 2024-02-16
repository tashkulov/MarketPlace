import React from 'react';
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
    const { t }=useTranslation();
    return (
        <div>
            {t("404 Не найдено")}
        </div>
    );
};

export default NotFoundPage;