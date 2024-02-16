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
            

        </div>
    );
};

export default App;