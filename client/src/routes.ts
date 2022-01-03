import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import AdminPage from "./pages/Admin/AdminPage";
import BasketPage from "./pages/BasketPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import DevicePage from "./pages/DevicePage/DevicePage";
import Auth from "./pages/AuthPage/Auth";
import SearchPage from "./pages/SearchPage/SearchPage";

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
        path:SHOP_ROUTE,
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
        path:DEVICE_ROUTE + '/:id',
        Component:DevicePage
    }
]