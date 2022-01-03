import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import './index.css'
import {setupStore} from "./store/store";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";

const store = setupStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App children={ <AppRouter/>}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

