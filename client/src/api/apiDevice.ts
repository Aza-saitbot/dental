import {createAsyncThunk} from "@reduxjs/toolkit";
import {$authHost, $host} from "./api";



export type TypeBrandsType = {
    createdAt: string
    id: number
    name: string
    updatedAt: string
}


export const createTypeApi = createAsyncThunk(
    'device/createType',
    async (requestOptions: { name: string }, {rejectWithValue}) => {
        try {
            const {data} = await $authHost.post('api/type', {name: requestOptions.name})
            return data
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const fetchType = createAsyncThunk(
    'device/fetchType',
    async (_, {rejectWithValue}) => {
        try {
            const {data}: any = await $host.get('api/type')
            return data
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const createBrandApi = createAsyncThunk(
    'device/createBrand',
    async (requestOptions: { name: string }, {rejectWithValue}) => {
        try {
            const {data} = await $authHost.post('api/brand', {name: requestOptions.name})
            return data
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

type ParamBrandsType = {
    brandId: number|null
    typeId: number|null
    limit: number
    page: number
}

export const fetchBrands = createAsyncThunk(
    'device/fetchBrands',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await $host.get('api/brand')
            return data
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const createDeviceApi = createAsyncThunk(
    'device/createDevice',
    async (device: any, {rejectWithValue}) => {
        try {
            const {data} = await $authHost.post('api/device', device)
            return data
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const fetchDevices = createAsyncThunk(
    'device/fetchDevices',
    async (params: ParamBrandsType, {rejectWithValue}) => {
        try {
            const {data} = await $host.get('api/device',{params:{...params}})
            return data
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const fetchOneDevice = createAsyncThunk(
    'device/fetchOneDevice',
    async (id: number, {rejectWithValue}) => {
        try {
            const {data} = await $host.get('api/device/' + id)
            return data
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);
