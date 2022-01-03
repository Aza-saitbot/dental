import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    createBrandApi, createDeviceApi,
    createTypeApi,
    fetchBrands,
    fetchDevices,
    fetchOneDevice,
    fetchType,
    TypeBrandsType
} from "../../api/apiDevice";
import CreateType from "../../pages/Admin/modals/CreateType";


interface DeviceState {
    isLoading:boolean;
    error:string|null;
    types: Array<TypeBrandsType>;
    selectType:number|null
    selectBrand:number|null
    brands: Array<TypeBrandsType>;
    devices: Array<DeviceItemType>;
    count:number
    device:DeviceItemType|null
    page:number
    limit:number
}

// export type DeviceItemType= { id: number; name: string; price: number; rating: number; img: string }

type InfoType={
    id:number,title:string,description:string
}

export type DeviceItemType={
    brandId: number
    createdAt: string
    id: number
    img: string
    info: Array<InfoType>
    name: string
    price: number
    rating: number
    typeId: number
    updatedAt: string
}

type FetchDevicesType={
    count:number,
    rows:Array<DeviceItemType>
}

const initialState: DeviceState = {
    isLoading:false,
    error:null,
    types: [],
    brands: [],
    count:0,
    devices: [],
    device:null,
    limit:3,
    page:1,
    selectBrand:null,
    selectType:null


}
export const storageName = 'userData'

export const userSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        setType: (state, action: PayloadAction<number|null>) => {
            state.selectType = action.payload
        },
        setBrand: (state, action: PayloadAction<number|null>) => {
            state.selectBrand = action.payload
        },
        setDevices: (state, action: PayloadAction<Array<DeviceItemType>>) => {
            state.devices = action.payload
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },


    },
    extraReducers: {
        [createTypeApi.pending.type]:(state)=>{
            state.isLoading=true
        },
        [createTypeApi.rejected.type]:(state,action:PayloadAction<{message:string}>)=>{
            state.error=action.payload.message
            state.isLoading=false
        },
        [createTypeApi.fulfilled.type]:(state,action:PayloadAction<TypeBrandsType>)=>{
            state.isLoading=false
            state.types.push(action.payload)
        },
        [fetchType.pending.type]:(state)=>{
            state.isLoading=true
        },
        [fetchType.rejected.type]:(state,action:PayloadAction<{message:string}>)=>{
            state.error=action.payload.message
            state.isLoading=false
        },
        [fetchType.fulfilled.type]:(state,action:PayloadAction<Array<TypeBrandsType>>)=>{
            state.isLoading=false
            state.types=action.payload
        },
        [createBrandApi.pending.type]:(state)=>{
            state.isLoading=true
        },
        [createBrandApi.rejected.type]:(state,action:PayloadAction<{message:string}>)=>{
            state.error=action.payload.message
            state.isLoading=false
        },
        [createBrandApi.fulfilled.type]:(state,action:PayloadAction<Array<TypeBrandsType>>)=>{
            state.isLoading=false
            state.brands=action.payload
        },
        [fetchBrands.pending.type]:(state)=>{
            state.isLoading=true
        },
        [fetchBrands.rejected.type]:(state,action:PayloadAction<{message:string}>)=>{
            state.error=action.payload.message
            state.isLoading=false
        },
        [fetchBrands.fulfilled.type]:(state,action:PayloadAction<Array<TypeBrandsType>>)=>{
            state.isLoading=false
            state.brands=action.payload
        },
        [fetchDevices.pending.type]:(state)=>{
            state.isLoading=true
        },
        [fetchDevices.rejected.type]:(state,action:PayloadAction<{message:string}>)=>{
            state.error=action.payload.message
            state.isLoading=false
        },
        [fetchDevices.fulfilled.type]:(state,action:PayloadAction<FetchDevicesType>)=>{
            state.isLoading=false
            state.devices=action.payload.rows
            state.count=action.payload.count
        },
        [createDeviceApi.pending.type]:(state)=>{
            state.isLoading=true
        },
        [createDeviceApi.rejected.type]:(state,action:PayloadAction<{message:string}>)=>{
            state.error=action.payload.message
            state.isLoading=false
        },
        [createDeviceApi.fulfilled.type]:(state,action:PayloadAction<DeviceItemType>)=>{
            state.isLoading=false
            state.devices.push(action.payload)

        },
        [fetchOneDevice.pending.type]:(state)=>{
            state.isLoading=true
        },
        [fetchOneDevice.rejected.type]:(state,action:PayloadAction<{message:string}>)=>{
            state.error=action.payload.message
            state.isLoading=false
        },
        [fetchOneDevice.fulfilled.type]:(state,action:PayloadAction<DeviceItemType>)=>{
            state.isLoading=false
            state.device=action.payload

        }

    }
})

export const {
    setBrand,setType,setDevices,setLimit,setPage
} = userSlice.actions

export default userSlice.reducer