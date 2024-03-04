<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

import cls from './ProductSearch.module.scss';
import { classNames } from "../../../shared/lib/classNames/classNames";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "../../../shared/lib/hooks/UseDebounce/UseDebounce";
import { Input } from "../../../shared/ui/Input/Input";
import { productSearchActions } from "../model/slice";

const ProductSearch = () => {
    const dispatch=useAppDispatch();
    const { t } = useTranslation();
    const [localTerm,setLocalTerm]=useState<string>('');


    const onChange=useCallback((value:string)=>{
        setLocalTerm(value);
    },[]);
    const onSearch=useCallback((value:string)=>{
        dispatch(productSearchActions.setTerm(value));
    },[dispatch]);

    const debouncedTerm=useDebounce<string>(localTerm,700);

    useEffect(() => {
        onSearch(debouncedTerm);
    }, [debouncedTerm,onSearch]);
    return (
        <div className={classNames(cls.ProductSearch)}>
            <Input
                value={localTerm}
                onChange={onChange}
                size="l"
                placeholder={t("Искать со мной...")}
=======
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
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
            />
        </div>
    );
};

export default ProductSearch;