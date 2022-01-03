import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import deviceReducer from './reducers/DeviceSlice'
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = combineReducers({

user: userReducer,
    device:deviceReducer

})

export const setupStore = () => {

    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;