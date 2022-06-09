import {createAsyncThunk} from "@reduxjs/toolkit";
import {$authHost, $host} from "./api";
import {SearchSchemaType} from "../types/RequestOptionsType";


type PromiseCreateJobApiType=any
type ParamsRequestCreateJobType=any

export const createJobApi = createAsyncThunk<PromiseCreateJobApiType,ParamsRequestCreateJobType,{ rejectValue:string }>(
    'job/createJobApi',
    async (job, {rejectWithValue}) => {
        try {
            const {data} = await $authHost.post('api/job', job)
            return data
        } catch (err: any) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

type ParamsFetchJobsType={

}

export const fetchJobs = createAsyncThunk<PromiseCreateJobApiType,ParamsFetchJobsType,{ rejectValue:string }>(
    'job/fetchJobs',
    async (params , {rejectWithValue}) => {
        try {
            const {data} = await $host.get('api/job',{params:{...params}})
            return data
        } catch (err: any) {
            return rejectWithValue(err.response.data.message);
        }
    }
);

export const fetchOneJob = createAsyncThunk(
    'job/fetchOneJob',
    async (id: number, {rejectWithValue}) => {
        try {
            const {data} = await $host.get('api/job/' + id)
            return data
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);
