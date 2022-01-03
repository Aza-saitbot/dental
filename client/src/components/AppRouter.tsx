import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {useAppSelector} from "../store/store";




const AppRouter = () => {

    const isAuth=useAppSelector((state)=>state.user.isAuth)

    return (
       <Switch>
           {isAuth && authRoutes.map(({path,Component})=>
               <Route key={path} path={path} component={Component} exact/>
           )}
           {publicRoutes.map(({path,Component})=>
               <Route key={path} path={path} component={Component} exact/>
           )}
           <Redirect to={SHOP_ROUTE}/>
       </Switch>
    );
};

export default AppRouter;

// const token=useAppSelector((state)=>state.userReducer.token)
// const Authenticated=!!token
//
// const routes = useRoutes(Authenticated)