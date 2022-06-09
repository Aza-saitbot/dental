import React from 'react';
import '../App.scss'
import {Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {MAIN_ROUTE} from "../utils/consts";
import {useAppSelector} from "../store/store";
import Header from "./Header/Header";


const AppRouter = () => {

    const isAuth=useAppSelector((state)=>state.user.isAuth)

    return (
       <Switch>
           {isAuth && authRoutes.map(({path,Component})=>
               <Route key={path} path={path} component={Component} exact/>
           )}
           {publicRoutes.map(({path,Component})=>
               <div className="app">
                   <Header/>
                   <Route key={path} path={path} component={Component} exact/>
               </div>
           )}
           <Redirect to={MAIN_ROUTE}/>
       </Switch>
    );
};

export default AppRouter;