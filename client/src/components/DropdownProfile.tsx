import React from 'react';
import '../pages/ShopPage/ShopPage.scss'
import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem} from "@mui/material";
import {Logout, PersonAdd, Settings} from "@mui/icons-material";
import {setIsAuth, setUser} from "../store/reducers/UserSlice";
import {useHistory} from "react-router-dom";
import {useAppSelector} from "../store/store";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {useDispatch} from "react-redux";


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
         <div className="main__header__menu" >
             <div onClick={handleClick} className="main__header__menu__item">
                 <MenuIcon className="main__header__menu__item__menuIcon"/>
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
                     <>
                         <MenuItem>
                             <Avatar /> Мой профиль
                         </MenuItem>
                         <MenuItem onClick={()=>history.push(ADMIN_ROUTE)}>
                             Админ панель
                         </MenuItem>
                         <Divider />
                         <MenuItem>
                             <ListItemIcon>
                                 <PersonAdd fontSize="small" />
                             </ListItemIcon>
                             Добавить другие аккаунты
                         </MenuItem>
                         <MenuItem>
                             <ListItemIcon>
                                 <Settings fontSize="small" />
                             </ListItemIcon>
                             Настройки
                         </MenuItem>
                         <MenuItem onClick={logoutHandler}>
                             <ListItemIcon>
                                 <Logout fontSize="small" />
                             </ListItemIcon>
                             Выйти
                         </MenuItem>
                     </>
                     : <>
                         <MenuItem onClick={()=>history.push(LOGIN_ROUTE)}>
                             Авторизация
                         </MenuItem>
                     </>
                 }
             </Menu>
         </div>
     );
 }


export default DropdownProfile;