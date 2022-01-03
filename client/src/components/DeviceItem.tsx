import React, {FC} from 'react';
import './DeviceList.scss'
import {Rating} from "@mui/material";
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";


type DeviceItemType = { id: number; name: string; price: number; rating: number; img: string }
type PropsType = {
    item: DeviceItemType
}

const DeviceItem: FC<PropsType> = ({item}) => {

    const history=useHistory()
    return (
        <div className="device__item" onClick={()=>history.push(DEVICE_ROUTE + '/'+ item.id)}>
            <div className="device__item__picture"><img src={process.env.REACT_APP_API_URL + item.img}/></div>
            <div>Samsung..</div>
            <div>Рейтинг</div>
            <div><Rating name="read-only" value={item.rating} readOnly/></div>
            <div className="device__item__name">{item.name}</div>
        </div>
    );
};

export default DeviceItem;