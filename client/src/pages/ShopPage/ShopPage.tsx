import * as React from 'react';
import {useAppSelector} from "../../store/store";
import TypesBar from "../../components/TypesBar";
import BrandBar from "../../components/BrandBar";
import DeviceList from "../../components/DeviceList";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchBrands, fetchDevices, fetchType} from "../../api/apiDevice";
import Pages from "../../components/Pages";


const ShopPage=()=> {
    const dispatch=useDispatch()
    const page=useAppSelector((state)=>state.device.page)
    const brandId=useAppSelector((state)=>state.device.selectBrand)
    const typeId=useAppSelector((state)=>state.device.selectType)


    useEffect(()=>{
        dispatch(fetchType())
        dispatch(fetchBrands())
        dispatch(fetchDevices({brandId:null,typeId:null, page:1,limit:3}))
    },[])

    useEffect(()=>{
        dispatch(fetchDevices({brandId,typeId, page,limit:2}))
    },[page,brandId,typeId])

    return (
        <div className="main">
            <div className="main__typeBar"><TypesBar /></div>
            <div className="main__brandBar"><BrandBar/></div>
            <div className="main__main">
                <DeviceList/>
                <Pages/>
            </div>
            <div className="main__footer">Footer</div>
        </div>
    );
}

export default ShopPage

