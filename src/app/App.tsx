<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useSelector } from "react-redux";

import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import { userActions } from "../entities/User";
import { getAuthData, getAuthDataInited } from "../entities/User/model/selectors/userSelectors";
import { classNames } from "../shared/lib/classNames/classNames";
import { useAppDispatch } from "../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Sidebar } from "../widgets/Sidebar";

import "../shared/config/i18n/i18n";


const App = () => {
    const dispatch=useAppDispatch();
    const { theme } = useTheme();
    const inited=useSelector(getAuthDataInited);
    const user =useSelector(getAuthData);

    useEffect(() => {
        if(!inited){
            dispatch(userActions.initAuthData());
        }
    }, [dispatch,inited,user]);
    return (
        <div className={classNames("app", {}, [theme])}>
            <div className="content_page">
                <Sidebar />
                <div className="content">
                    <AppRouter />
                </div>
            </div>
=======
import React from 'react';

import { useTheme } from "./providers/ThemeProvider";
// eslint-disable-next-line import/order
import { classNames } from "../shared/lib/classNames/classNames";
import "./styles/index.scss";
// eslint-disable-next-line import/order
import { AppRouter } from "./providers/router";
import "../shared/config/i18n/i18n";
import { Sidebar } from "../widgets/Sidebar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <div className="content-page">
                <Sidebar/>
                <div className="content">
                    <AppRouter/>

                </div>
            </div>
            

>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
        </div>
    );
};

export default App;