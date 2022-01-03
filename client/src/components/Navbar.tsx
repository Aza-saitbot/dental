import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import LogoCompanyIcon from "../assets/logo.png";
import {makeStyles} from "@material-ui/styles";
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import DropdownProfile from "./DropdownProfile";

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}


const useStyles = makeStyles({

    root: {
        display:'grid',
        background: 'white',
        width:'100vw',
        position: 'fixed',
        zIndex: 10,
    },
});

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = (props: Props) => {
const history=useHistory()
const classes=useStyles()

       return (
           <HideOnScroll {...props} >
               <AppBar
                   className={classes.root}
                   color="inherit">
                   <Toolbar >

                       <div className="main__header">
                           <div className="main__header__logo">
                               <div
                                   onClick={()=>history.push(SHOP_ROUTE)}
                                   className="main__header__logo__item">
                                   <img src={LogoCompanyIcon} alt="logo"/>
                               </div>
                               <p>Ｓｅｎｔ Ｔｏｏｔｈ</p>
                           </div>
                           <DropdownProfile/>
                       </div>
                   </Toolbar>
               </AppBar>
           </HideOnScroll>
       )
};

export default Navbar;