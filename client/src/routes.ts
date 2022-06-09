import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DENTAL_TECHNICIANS_ROUTE,
    JOB_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import AdminPage from "./pages/AdminPage/AdminPage";
import BasketPage from "./pages/BasketPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import Auth from "./pages/AuthPage/Auth";
import CardJob from "./pages/CardJob";
import DentalTechnicians from "./pages/DentalTechnicians/DentalTechnicians";


export const authRoutes =[
    {
        path:ADMIN_ROUTE,
        Component:AdminPage
    },
    {
        path:BASKET_ROUTE,
        Component:BasketPage
    }
]



export const publicRoutes =[
    {
        path:MAIN_ROUTE,
        Component:SearchPage
    },
    {
        path:LOGIN_ROUTE,
        Component:Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component:Auth
    },
    {
        path:JOB_ROUTE + '/:id',
        Component:CardJob
    },{
    path:DENTAL_TECHNICIANS_ROUTE,
        Component:DentalTechnicians
    }
]