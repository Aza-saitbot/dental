import React, {useState} from 'react';
import './AdminPage.scss'
import {Button} from "@mui/material";
import CreateType from "./modals/CreateType";
import CreateBrand from "./modals/CreateBrand";
import CreateDevice from "./modals/CreateDevice";

    const AdminPage = () => {
        const [typeVisible,setTypeVisible]=useState(false)
        const [brandVisible,setBrandVisible]=useState(false)
        const [deviceVisible,setDeviceVisible]=useState(false)

    return (
        <div className="adminPage">
            <div className="adminPage__added">
                <Button onClick={()=>setTypeVisible(true)}>
                    Добавить тип
                </Button>
                <Button onClick={()=>setBrandVisible(true)}>
                    Добавить бренд
                </Button>
                <Button onClick={()=>setDeviceVisible(true)}>
                    Добавить устройства
                </Button>
                <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
                <CreateBrand show={brandVisible} onHide={()=>setBrandVisible(false)}/>
                <CreateDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>
            </div>
        </div>
    );
};

export default AdminPage;