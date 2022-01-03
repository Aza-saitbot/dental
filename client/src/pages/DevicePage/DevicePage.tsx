import React, {useEffect} from 'react';
import './DevicePage.scss'
import {Rating} from "@mui/material";
import {useDispatch} from "react-redux";
import {fetchOneDevice} from "../../api/apiDevice";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../store/store";
import {DeviceItemType} from "../../store/reducers/DeviceSlice";


const DevicePage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const {id}: any = params

    const device: DeviceItemType | null = useAppSelector((state) => state.device.device)


    useEffect(() => {
        dispatch(fetchOneDevice(id))
    }, [])


    if (device) {
        return (
            <div className="devicePage">
                <div className="devicePage__header">
                    <div className="devicePage__header__picture">
                        <img src={process.env.REACT_APP_API_URL + device.img}/>
                    </div>
                    <div className="devicePage__header__rating"><Rating name="read-only" value={device.rating}
                                                                        readOnly/></div>
                    <div>Цена: {device.price} руб</div>
                </div>
                <div className="devicePage__footer">
                    <h3>Характеристика</h3>
                    {device.info?.map((item, index) =>
                        <div key={item.id}>{item.title}:{item.description} </div>
                    )}
                </div>

            </div>
        );
    }
    return null
};

export default DevicePage;