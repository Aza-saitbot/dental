import React from 'react';
import Pagination from '@mui/material/Pagination';
import {useAppSelector} from "../store/store";
import {useDispatch} from "react-redux";
import {setPage} from "../store/reducers/DeviceSlice";

const Pages = () => {
    const dispatch=useDispatch()
    const count=useAppSelector((state)=> state.device.count)
    const limit=useAppSelector((state)=> state.device.limit)
    const page=useAppSelector((state)=> state.device.page)
    const pagesCount=Math.ceil(count/limit)


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch( setPage(value))
    };

    return (
        <div>
            <Pagination  count={pagesCount} page={page} onChange={handleChange} shape="rounded" />
        </div>
    );
};

export default Pages;