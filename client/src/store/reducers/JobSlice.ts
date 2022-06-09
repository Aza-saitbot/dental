import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DateRange} from "@mui/lab/DateRangePicker";
import {createJobApi, fetchJobs} from "../../api/apiJob";


export interface JobType {
    abatment?: string
    carcass: Array<{ [key: string]: boolean }>
    colorRestorations: string
    colorTeeth: string
    datePicker: Array<DateRange<Date> | null>
    designCarcass?: string
    implants?: string
    intermediatePart: 2
    rootTab?: string
    shoulder?: string
    teeth: Array<{[key: number]: boolean}>
    temporaryCrown?: string
    tz: string
}

interface JobState {
    isLoading:boolean;
    error:string|null;
    jobs:Array<JobType>
    count:number
    page:number
    limit:number
    isRollUp:boolean
}

// export type DeviceItemType= { id: number; name: string; price: number; rating: number; img: string }

type InfoType={
    id:number,title:string,description:string
}


type FetchJobsType={
    count:number,
    rows:Array<JobType>
}

const initialState: JobState = {
    isLoading:false,
    error:null,
    jobs:[],
    count:0,
    limit:0,
    page:1,
    isRollUp:false


}
export const storageName = 'userData'

export const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setDevices: (state, action: PayloadAction<Array<JobType>>) => {
            state.jobs = action.payload
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
        setIsRollUp: (state, action: PayloadAction<boolean>) => {
            state.isRollUp = action.payload
        },


    },
    extraReducers: {
        [fetchJobs.pending.type]:(state)=>{
            state.isLoading=true
        },
        [fetchJobs.rejected.type]:(state,action:PayloadAction<{message:string}>)=>{
            state.error=action.payload.message
            state.isLoading=false
        },
        [fetchJobs.fulfilled.type]:(state,action:PayloadAction<FetchJobsType>)=>{
            state.isLoading=false
            state.jobs=action.payload.rows
            state.count=action.payload.count
        },
        [createJobApi.pending.type]:(state)=>{
            state.isLoading=true
        },
        [createJobApi.rejected.type]:(state,action:PayloadAction<{message:string}>)=>{
            state.error=action.payload.message
            state.isLoading=false
        },
        [createJobApi.fulfilled.type]:(state,action:PayloadAction<JobType>)=>{
            state.isLoading=false
            state.jobs.push(action.payload)

        },

    }
})

export const {
    setDevices,setLimit,setPage,setIsRollUp
} = jobSlice.actions

export default jobSlice.reducer