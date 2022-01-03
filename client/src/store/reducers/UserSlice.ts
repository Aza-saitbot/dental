import {IUserType} from "../../types/IUSer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthUserType, fetchCheck, fetchLogin, fetchRegister} from "../../api/api";


interface UserState{
    isAuth:boolean,
    user:AuthUserType |null,
    users:Array<IUserType>
    isLoading:boolean
    error:string|null
    success:string|null
    token:string|null
    userId:string|null
}

const initialState:UserState={
    isAuth:false,
    user:null,
    users:[],
    isLoading:false,
    error:null,
    success:null,
    token:null,
    userId:null
}
export const storageName = 'userData'

export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setIsAuth:(state,action:PayloadAction<boolean>)=>{
            state.isAuth=action.payload
        },
        setUser:(state,action:PayloadAction<AuthUserType | null>)=>{
            state.user=action.payload
        },
        setErrorAuth:(state)=>{
            state.error=null
        },
        setSuccessAuth:(state)=>{
            state.success=null
        },

    },
    extraReducers:{
        [fetchRegister.pending.type]:(state)=>{
           state.isLoading=true
        },
        [fetchRegister.rejected.type]:(state,action:PayloadAction<{message:string}>)=>{
            state.isLoading=false
            state.error=action.payload?.message
        },
        [fetchRegister.fulfilled.type]:(state,action:PayloadAction<AuthUserType>)=>{
            state.isLoading=false
            state.isAuth=true
            state.success="Пользователь успешно создан!"
            state.user=action.payload
        },
        [fetchLogin.pending.type]:(state)=>{
            state.isLoading=true
        },
        [fetchLogin.rejected.type]:(state,action:PayloadAction<{message:string}>)=>{
            state.isLoading=false
            state.error=action.payload?.message
        },
        [fetchLogin.fulfilled.type]:(state,action:PayloadAction<AuthUserType>)=>{
            state.isLoading=false
            state.isAuth=true
            state.user=action.payload
        },
        [fetchCheck.pending.type]:(state)=>{
            state.isLoading=true
        },
        [fetchCheck.rejected.type]:(state,action:PayloadAction<{message:string}>)=>{
            state.isLoading=false
            state.error=action.payload?.message
        },
        [fetchCheck.fulfilled.type]:(state,action:PayloadAction<AuthUserType>)=>{
            state.isLoading=false
            state.isAuth=true
            state.user=action.payload
        },

    }
})

export const {
    setErrorAuth,
    setSuccessAuth,
    setIsAuth,
    setUser
}=userSlice.actions

export default userSlice.reducer