import React from 'react';
import './DeviceList.scss'
import {useAppSelector} from "../store/store";
import DeviceItem from "./DeviceItem";

type DeviceItemType={ id: number; name: string; price: number; rating: number; img: string }


const DeviceList = () => {
    const devices:Array<DeviceItemType>=useAppSelector(state=>state.device.devices)
    return (

            <div className="device">
                {devices?.map((item)=>
                    <DeviceItem key={item.id} item={item}/>
                )}
            </div>

    );
};

export default DeviceList;