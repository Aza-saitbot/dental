import React, {useEffect} from 'react';
import './App.scss'
import {AlertBasic} from "./components/Alert/Alert";
import AppRouter from "./components/AppRouter";
import {fetchCheck} from "./api/api";
import {useAppSelector} from "./store/store";
import {useDispatch} from "react-redux";
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";

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
            <>
                <AlertBasic/>
                <AppRouter/>
            </>
    );
}

export default App;


