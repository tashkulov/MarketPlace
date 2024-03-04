<<<<<<< HEAD
import React, { useCallback } from 'react';
import { Route, Routes } from "react-router-dom";

import RequireAuth from "./RequireAuth";
import { AppRouteProps, routerConfig } from "../config/routerConfig";

const AppRouter = () => {
    
    const render = useCallback((route: AppRouteProps) => {

        const { path,element ,authOnly }=route;
        return (
            <Route 
                path={path}
                element={authOnly ? <RequireAuth>{element} </RequireAuth> : element}
            />
        );
    }, []);
    
    return (
        <Routes>
            {Object.values(routerConfig).map(render)}
        </Routes>
    );
};

=======
import React, { useCallback } from 'react';
import { Route, Routes } from "react-router-dom";

import { AppRouteProps, routerConfig } from "../config/routerConfig";

const AppRouter = () => {

    const render=useCallback((route:AppRouteProps)=>{
        return(
            <Route
                path={route.path}
                element={route.element}/>
        );
    },[]);
    const div = <div>
        <Routes>
            {Object.values(routerConfig).map(render)}
        </Routes>
    </div>;
    return div;
};

>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
export default AppRouter;