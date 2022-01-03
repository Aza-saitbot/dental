import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './modals.scss'
import Modal from '@mui/material/Modal';
import {Controller, useFieldArray, useForm} from "react-hook-form";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useAppSelector} from '../../../store/store';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createDeviceApi} from "../../../api/apiDevice";
import {useHistory} from "react-router-dom";
import {SHOP_ROUTE} from "../../../utils/consts";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};


type PropsType = {
    show: boolean
    onHide: () => void
}
type DeviceType = { id: number; name: string; price: number; rating: number; img: string }
type BrandType = { id: number, name: string }

type SubmitType = {
    info: Array<{title: 'доп информа', description: 'Доп описание'}>
    name:string
    price: string
    selectBrand: number
    selectType: number
}

type TypeFile={
    lastModified: number
    lastModifiedDate: any
name: string
size: number
type: string
webkitRelativePath:string
}| Blob



const CreateDevice: React.FC<PropsType> = ({onHide, show}) => {
    const {register, handleSubmit, control,reset} = useForm();
const dispatch=useDispatch()
    const history=useHistory()
    const [file, setFile] = useState(null)

    const {fields, append, remove} = useFieldArray({
        control,
        name: "info"
    });

    const addFile = (event:any) => {

        setFile(event.target.files[0])
    }

    const devices: Array<DeviceType> = useAppSelector(state => state.device.devices)
    const brands: Array<BrandType> = useAppSelector(state => state.device.brands)
    const types: Array<BrandType> = useAppSelector(state => state.device.types)


    const onSubmit = (data:SubmitType) => {

        const formData:FormData=new FormData()
        formData.append('name',data.name)
        formData.append('price',data.price)
        if(file)formData.set('img',file)
        formData.append('brandId',`${data.selectBrand}`)
        formData.append('typeId',`${data.selectType}`)
        formData.append('info',JSON.stringify(data.info))
        dispatch(createDeviceApi(formData))
        onHide()
        reset({})
        dispatch(history.push(SHOP_ROUTE))

    }
    return (
        <Modal
            open={show}
            onClose={onHide}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="addDevice">
                        <div>
                            <Controller
                                name="selectType"
                                control={control}
                                render={({field: {onChange, value}}) => (
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Выберите тип</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={value}
                                            label="Выберите тип"
                                            onChange={onChange}
                                        >
                                            {types?.map(type =>
                                                <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="selectBrand"
                                control={control}
                                render={({field: {onChange, value}}) => (
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Выберите бренд</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={value}
                                            label="Выберите бренд"
                                            onChange={onChange}
                                        >
                                            {brands?.map(brand =>
                                                <MenuItem key={brand.id} value={brand.id}>{brand.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                )}
                            />
                        </div>

                        <Controller
                            name="name"
                            control={control}
                            render={({field: {onChange, value}}) => (
                                <TextField
                                    className="modals__input"
                                    onChange={onChange} value={value} label={"Введит название устройства"}/>
                            )}
                        />
                        <Controller
                            name="price"
                            control={control}
                            render={({field: {onChange, value}}) => (
                                <TextField
                                    className="modals__input"
                                    type="number"
                                    onChange={onChange} value={value} label={"Введит стоимость устройства"}/>
                            )}
                        />
                                <input
                                    className="modals__input"
                                    type="file"
                                    onChange={addFile}/>

                        <Button type="button" variant="contained" color="success"
                                onClick={() => append({title: "", description: ""})}
                        >Добавить информацию</Button>
                        <div className="addDevice__infoList">
                            {fields.map(({id}, index) => (
                                <div key={id} className="addDevice__infoList__item">
                                    <Controller
                                        {...register(`info.${index}.title`)}
                                        control={control}
                                        render={({field: {onChange, value}}) => (
                                            <TextField
                                                onChange={onChange} value={value} label={"Введите название"}/>
                                        )}
                                    />
                                    <Controller
                                        {...register(`info.${index}.description`)}
                                        control={control}
                                        render={({field: {onChange, value}}) => (
                                            <TextField
                                                onChange={onChange} value={value} label={"Введите описание"}/>
                                        )}
                                    />
                                    <Button type="button" variant="outlined" color="error"
                                            onClick={() => remove(index)}>Delete</Button>
                                </div>
                            ))}
                        </div>
                        <div className="modals__button">
                            <Button variant="outlined" color="error" onClick={onHide}>Закрыть</Button>
                            <Button variant="contained" color="success" type="submit">Добавить
                                устройство</Button>
                        </div>
                    </div>
                </form>
            </Box>
        </Modal>
    );
}

export default CreateDevice