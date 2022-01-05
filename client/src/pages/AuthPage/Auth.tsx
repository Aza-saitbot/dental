import React, {useEffect} from 'react';
import './AuthPage.scss'
import {Button, FormControl, TextField, Typography} from "@mui/material";
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import LogoCompanyIcon from '../../assets/logo-background.png';
import {useStylesButton, useStylesInput} from "../../useStyles/useStyles";
import { useAppSelector} from "../../store/store";
import {fetchLogin, fetchRegister} from "../../api/api";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {useDispatch} from "react-redux";


interface ISignInForm {
    email: string;
    password: string
}

type PropsType = {}

const Auth: React.FC<PropsType> = () => {
    const classes = useStylesButton()
    const styleInput = useStylesInput()
const history=useHistory()
    const location = useLocation()

    const isLogin = location.pathname === LOGIN_ROUTE


    const isLoading = useAppSelector((state) => state.user.isLoading)
    const isAuth = useAppSelector((state) => state.user.isAuth)


    const dispatch = useDispatch()
    const {control, register, handleSubmit} = useForm({
        mode: "onSubmit",
    })

    const onSubmit: SubmitHandler<ISignInForm> = (data) => {
        if (isLogin) {
            dispatch(fetchLogin(data))
        } else {
            dispatch(fetchRegister(data))
        }
    }


  useEffect(()=>{
     if (isAuth)history.push(SHOP_ROUTE)
  },[isAuth])

    return (
        <div className="auth">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="auth__form">
                    <div className="auth__form__logo">
                        <div className="auth__form__logo__item">
                            <img src={LogoCompanyIcon} alt="logo"/>
                        </div>
                    </div>
                    <div className="auth__form__title">
                        <Typography
                            sx={{fontFamily: 'Inter'}}
                            component="h1" variant="h5">
                            {isLogin ? 'Авторизация' : 'Регистрация'}
                        </Typography>
                    </div>
                    <div className="auth__form__field">
                        <FormControl fullWidth>
                            <Controller
                                {...register('email')}
                                control={control}

                                render={({field: {onChange, value}}) => (
                                    <TextField
                                        label="Email"
                                        margin="normal"
                                        className={styleInput.root}
                                        value={value}
                                        onChange={onChange}

                                    />
                                )}
                            />
                        </FormControl>
                    </div>
                    <div className="auth__form__field">
                        <FormControl fullWidth>
                            <Controller
                                {...register('password')}
                                control={control}
                                render={({field: {onChange, value}}) => (
                                    <TextField
                                        type="password"
                                        label="Password"
                                        value={value}
                                        onChange={onChange}

                                    />
                                )}
                            />
                        </FormControl>
                    </div>
                    <div className="auth__form__field">
                        <Button
                            className={classes.root}
                            type="submit"
                            fullWidth
                            sx={{mt: 3, mb: 2}}
                            disabled={isLoading}
                        >
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </div>

                    <div className="auth__form__link">
                        <div>
                            {isLogin ?
                                <div>
                                    <p>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink></p>
                                </div>
                                : <div>
                                    <p>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink></p>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Auth;