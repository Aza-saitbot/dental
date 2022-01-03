import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import {useAppSelector} from "../store/store";
import {useDispatch} from "react-redux";
import {setBrand} from "../store/reducers/DeviceSlice";

export default function BrnadBar() {
    const [brandValue, setBrandValue] = React.useState<string | number>('Выбрать бренд');
    const [open, setOpen] = React.useState(false);
const dispatch=useDispatch()

    const brands=useAppSelector((state)=>state.device.brands)

    console.log('brandValue',brandValue)
    const handleChange = (event: SelectChangeEvent<typeof brandValue>) => {
        setBrandValue(event.target.value);
        if (event.target.value==="Выбрать бренд"){
            dispatch(setBrand(null))
        }else {
            dispatch(setBrand(Number(event.target.value)))
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={brandValue}
                    onChange={handleChange}
                >
                    <MenuItem value="Выбрать бренд">Выбрать бренд</MenuItem>
                    {
                        brands?.map(brand=>
                            <MenuItem key={brand.id} value={brand.id}>{brand.name}</MenuItem>
                        )
                    }

                </Select>
            </FormControl>
        </div>
    );
}