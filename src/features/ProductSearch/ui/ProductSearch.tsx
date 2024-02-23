import React from 'react';
import { useTranslation } from "react-i18next";

import cls from "./ProductSearch.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Input } from "../../../shared/ui/Input/Input";

const ProductSearch = () => {
    const { t } =useTranslation();
    return (
        <div
            className={classNames(cls.ProductSearch)}
        >
            <Input
                size="l"
                placeholder={t('Искать со мной...')}
            />
        </div>
    );
};

export default ProductSearch;