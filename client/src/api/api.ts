import {createAsyncThunk} from "@reduxjs/toolkit";
import jwt_decode from 'jwt-decode'

import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = (config:any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}


type RegisterType={
    email:string
    password:string
}


export type AuthUserType={
    email: string
    exp: number
    iat: number
    id: number
    role: string
}


export const fetchRegister = createAsyncThunk(
    'auth/register',
    async (payload: RegisterType, {rejectWithValue}) => {
        try {
            const {password,email}=payload
            const {data}:any=await $host.post('api/user/registration',{email,password,role:'ADMIN'})
            localStorage.setItem('token',data.token)
            return jwt_decode(data.token)
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const fetchLogin = createAsyncThunk(
    'auth/login',
    async (payload: RegisterType, {rejectWithValue}) => {
        try {
            const {password,email}=payload
            const {data}:any=await $host.post('api/user/login',{email,password})
            localStorage.setItem('token',data.token)
            return jwt_decode(data.token)
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);
export const fetchCheck = createAsyncThunk(
    'auth/check',
    async (_, {rejectWithValue}) => {
        try {
            const {data}:any=await $authHost.get('api/user/auth')
            localStorage.setItem('token',data.token)
            return jwt_decode(data.token)
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

