import React, { useCallback, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import cls from './AuthByUserName.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "../../../shared/ui/Button/Button";
import { Input } from "../../../shared/ui/Input/Input";
import { Loader } from "../../../shared/ui/Loader/Loader";
import { getAuthData } from "../model/selectors/authByNameSelectors";
import { loginByUserName } from "../model/services/loginByUserName";
import { registerByUserName } from "../model/services/registerByUserName";
import { authByUsernameAction } from "../model/slice/authByUserNameSlice";

const AuthByUsername = () => {
    const dispatch=useAppDispatch();
    const { t }=useTranslation();
    const navigate=useNavigate();
    const {
        username,
        password,
        isLoading
    }=useSelector(getAuthData);

    const [isLogin,setIsLogin]=useState<boolean>(true);


    const toggleIsLogin=useCallback(()=>{
        setIsLogin(prev=>!prev);
    },[]);

    const onChange=useCallback((field:'username'| 'password')=>(value:string)=>{
        dispatch(authByUsernameAction.set({
            field,
            value
        }));
    },[dispatch]);
    
    const onSubmit = async (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        
        const result =isLogin
            ? await dispatch(loginByUserName({  username,password  }))
            : await dispatch(registerByUserName({ username,password }));


        if(result.meta.requestStatus === "fulfilled"){
            navigate("/product-list");
        }
        
    };
    const btnTitle=isLogin ? t('Войти') :t("Зарегистрироваться");


    const disabled=isLoading || !username || !password;
    return (
        <div className={classNames(cls.AuthByUsername)}>
            <div className={cls.ring}>
                {[1, 2, 3].map(i => <i key={i}/>)}
                <form className={cls.form}
                    onSubmit={onSubmit}>

                    <h2><strong>{ isLogin ? t("Авторизация") : t ("Регистрация")}</strong></h2>
                    <Input
                        onChange={onChange('username')}
                        value={username}
                        placeholder={t("Ввведите логин")}
                        type='text'
                    />
                    <Input
                        onChange={onChange('password')}
                        
                        value={password}
                        placeholder={t("Введите пароль")}
                        type='password'
                    />
                    <Button
                        type="submit"
                        disabled={disabled}
                        size="m"
                    >
                        {isLoading ? <Loader/> : btnTitle}
                    </Button>

                    <Button
                        type="button"
                        onClick={toggleIsLogin}
                        variant="clear"
                    >
                        {isLogin ? t("Регистрация") :t("Уже есть аккаунт?")}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AuthByUsername;
