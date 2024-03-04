import { RouteProps } from "react-router-dom";

import { AuthPage } from "../../../../pages/AuthPage";
import { MainPage } from "../../../../pages/MainPage";
<<<<<<< HEAD
import { NotFoundPage } from "../../../../pages/NotFoundPage";
import { ProductDetailsPage } from "../../../../pages/ProductDetailsPage";
import ProductListPage from "../../../../pages/ProductListPage/ui/ProductListPage";
import { ProfilePage } from "../../../../pages/ProfilePage";

enum AppRoutes {
    MAIN = "main",
    NOT_FOUND = "not_found",
    PRODUCT_LIST = "product_list",
    PRODUCT_DETAILS = "product_details",
    AUTH = "auth",
    PROFILE='profile',
}

export type AppRouteProps = RouteProps & {
    authOnly?:boolean;

}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PRODUCT_LIST]: "/product_list",
    [AppRoutes.PRODUCT_DETAILS]: "/product_details/:id",
    [AppRoutes.AUTH]: "/auth",
    [AppRoutes.PROFILE]:'/profile',

    // last
    [AppRoutes.NOT_FOUND]: "*"
};

export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    [AppRoutes.PRODUCT_LIST]: {
        path: RoutePaths.product_list,
        element: <ProductListPage />,
        authOnly:true
    },
    [AppRoutes.PRODUCT_DETAILS]: {
        path: RoutePaths.product_details,
        element: <ProductDetailsPage />,
        authOnly:true

    },
    [AppRoutes.AUTH]: {
        path: RoutePaths.auth,
        element: <AuthPage />
    },
    [AppRoutes.PROFILE]:{
        path:RoutePaths.profile,
        element:<ProfilePage/>,
        authOnly:true  
    },
    
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFoundPage />
    }
};
=======
import { NotFoundPage } from "../../../../pages/NotFoundPages";
import { ProductDetailsPage } from "../../../../pages/ProductDetailsPage";
import { ProductListPage } from "../../../../pages/ProductListPage";

enum AppRoutes{
    MAIN="main",
    NOT_FOUND="not_found",
    PRODUCT_LIST="product_list",
    PRODUCT_DETAILS="product_details",
    AUTH="auth"
}

export type AppRouteProps=RouteProps & {}

export const RoutePath:Record<AppRoutes, string>={
    [AppRoutes.MAIN]:"/",
    [AppRoutes.PRODUCT_LIST]:"product-list",
    [AppRoutes.PRODUCT_DETAILS]:"product-details/:id",
    [AppRoutes.AUTH]:"/auth",




    // last
    [AppRoutes.NOT_FOUND]:"/*",
};

export  const  routerConfig:Record<AppRoutes, AppRouteProps>={
    [AppRoutes.MAIN]:{
        path:RoutePath.main,
        element:<MainPage/>
    },

    [AppRoutes.PRODUCT_LIST]:{
        path:RoutePath.product_list,
        element:<ProductListPage/>
    },
    [AppRoutes.PRODUCT_DETAILS]:{
        path:RoutePath.product_details,
        element:<ProductDetailsPage/>
    },
    [AppRoutes.AUTH]:{
        path:RoutePath.auth,
        element:<AuthPage/>
    },
    [AppRoutes.NOT_FOUND]:{
        path:RoutePath.not_found,
        element:<NotFoundPage/>
    }
    
    
};



>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
