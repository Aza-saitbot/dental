import React, {useEffect} from 'react';
import './App.css';
import {AlertBasic} from "./components/alert/Alert";
import AppRouter from "./components/AppRouter";
import Navbar from './components/Navbar';
import Toolbar from "@mui/material/Toolbar";
import {fetchCheck} from "./api/api";
import {useAppSelector} from "./store/store";
import {useDispatch} from "react-redux";
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {LocalizationProvider} from "@mui/lab";

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

const styleLoading = {display: 'flex', width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center'}

function App(props: Props) {

    const isLoading = useAppSelector((state) => state.user.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCheck())
    }, [])

    if (isLoading) {
        return <Box sx={styleLoading}>
            <CircularProgress color="success"/>
        </Box>
    }


    return (
        <React.Fragment>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <AlertBasic/>
                <Navbar {...props} />
                <Toolbar/>
                <AppRouter/>
            </LocalizationProvider>

        </React.Fragment>
    );
}

export default App;


