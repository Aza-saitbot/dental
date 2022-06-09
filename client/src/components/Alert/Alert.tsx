import * as React from 'react';
import Alert from '@mui/material/Alert';
import { useAppSelector} from "../../store/store";
import {Collapse, IconButton} from "@mui/material";
import {setErrorAuth, setSuccessAuth} from "../../store/reducers/UserSlice";
import CloseIcon from '@mui/icons-material/Close';
import {makeStyles} from "@material-ui/styles";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const useStyles = makeStyles({
    root: {
        position:'absolute',
        marginTop:15,
        marginLeft:'38vw',
        zIndex: 20,

    }
});

export const AlertBasic=()=>{
    const classes=useStyles()
    const dispatch=useDispatch()
    const error=useAppSelector((state)=>state.user.error)
    const success=useAppSelector((state)=>state.user.success)
    const getBooleanError=()=>!!error;
    const getBooleanSuccess=()=>!!success;
    console.log('success',success)
    console.log('error',error)
    useEffect(()=>{
        if (success){
            setTimeout(()=>{
                dispatch(setSuccessAuth())
            },2000)
        }

    },[success])

    if (success){
        return (
            <div>
                <Collapse in={getBooleanSuccess()} className={classes.root}>
                    <Alert severity="success">{success}</Alert>
                </Collapse>
            </div>
        );
    }


    if (error){
        return (
                <Collapse in={getBooleanError()} className={classes.root}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    dispatch(setErrorAuth())
                                }}>
                                <CloseIcon  fontSize="inherit" />
                            </IconButton>
                        }

                        severity="error">{error}</Alert>
                </Collapse>
        );
    }
    return null

}