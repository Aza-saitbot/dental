import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useAppSelector} from "../store/store";
import {setPage, setType} from "../store/reducers/DeviceSlice";
import { useDispatch } from 'react-redux';


function a11yProps(typeId: number) {
    return {
        id: `simple-tab-${typeId}`,
        'aria-controls': `simple-tabpanel-${typeId}`,
    };
}


const TypesBar=()=> {
const dispatch=useDispatch()

    const types:Array<{id:number,name:string}> = useAppSelector((state) => state.device.types)
    const value:number |null= useAppSelector((state) => state.device.selectType)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        dispatch( setPage(1))
        dispatch(setType(newValue))
    };

    return (
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {types?.map((type)=>
                        <Tab key={type.id} label={type.name} value={type.id} {...a11yProps(type.id)} />
                    )}
                </Tabs>
            </Box>

    );
}

export default TypesBar

