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
            />
        </div>
    );
};

export default ProductSearch;