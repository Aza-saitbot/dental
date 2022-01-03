import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './modals.scss'
import Modal from '@mui/material/Modal';
import {Controller, useForm} from "react-hook-form";
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {createBrandApi, createTypeApi} from "../../../api/apiDevice";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius:5,
    boxShadow: 24,
    p: 4,
};


type PropsType={
    show:boolean
    onHide:()=>void
}

const CreateType:React.FC<PropsType>= ({onHide,show}) => {

    const dispatch = useDispatch()

    const {handleSubmit, control, reset} = useForm();
    const onSubmit = (data: { addBrand: string }) => {
        dispatch(createBrandApi({name: data.addBrand}))
        reset({addBrand: ''})
        onHide()
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
                    <div className="modals">
                        <Controller
                            name="addBrand"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    className="modals__input"
                                    onChange={onChange} value={value} label={"Введите название бренда"} />
                            )}
                        />
                        <div className="modals__button">
                            <Button variant="outlined" color="error"  onClick={onHide}>Закрыть</Button>
                            <Button variant="contained" color="success" type="submit">Добавить бренд</Button>
                        </div>
                    </div>
                </form>
            </Box>
        </Modal>
    );
}

export default CreateType