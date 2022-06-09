import React from 'react';
import {useDispatch} from "react-redux";
import './Header/Header.scss'
import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, Divider, dividerClasses, IconButton, ListItemIcon, Menu, MenuItem} from "@mui/material";
import {Logout, PersonAdd, Settings} from "@mui/icons-material";
import {setIsAuth, setUser} from "../store/reducers/UserSlice";
import {useHistory} from "react-router-dom";
import {useAppSelector} from "../store/store";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";



const styleMenu={
    elevation: 0,
    sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
        },
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    },
}

const menuItems=[
    {id:1, Component: <div>Мой профиль</div> },
    {id:2, Component: <div>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            Выйти
        </div>},
]

const DropdownProfile = () => {
    const dispatch=useDispatch()
    const history=useHistory()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const isAuth= useAppSelector(state => state.user.isAuth)

    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutHandler=()=>{
        dispatch(setUser(null))
        dispatch(setIsAuth(false))
    }
     return (
         <div>
             <div onClick={handleClick} className="header__menu__item">
                 <MenuIcon className="header__menu__item__menuIcon"/>
                 <IconButton onClick={handleClick} size="small">
                     <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                 </IconButton>
             </div>
             <Menu
                 anchorEl={anchorEl}
                 open={open}
                 onClose={handleClose}
                 onClick={handleClose}
                 PaperProps={styleMenu}
                 transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                 anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
             >
                 {isAuth ?
                     menuItems.map(({Component,id})=>
                         <MenuItem key={id} >
                             {Component}
                         </MenuItem>
                     )
                     : <MenuItem onClick={()=>history.push(LOGIN_ROUTE)}>
                             Авторизация
                 </MenuItem>

                 }
             </Menu>
         </div>
     );
 }


export default DropdownProfile;

// <React.Fragment>
//     <MenuItem>
//         <Avatar /> Мой профиль
//     </MenuItem>
//     <MenuItem onClick={()=>history.push(ADMIN_ROUTE)}>
//         Админ панель
//     </MenuItem>
//     <Divider />
//     <MenuItem>
//         <ListItemIcon>
//             <PersonAdd fontSize="small" />
//         </ListItemIcon>
//         Добавить другие аккаунты
//     </MenuItem>
//     <MenuItem>
//         <ListItemIcon>
//             <Settings fontSize="small" />
//         </ListItemIcon>
//         Настройки
//     </MenuItem>
//     <MenuItem onClick={logoutHandler}>
//         <ListItemIcon>
//             <Logout fontSize="small" />
//         </ListItemIcon>
//         Выйти
//     </MenuItem>
// </React.Fragment>