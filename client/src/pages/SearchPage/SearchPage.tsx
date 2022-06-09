import React from 'react';
import './SearchPage.scss'
import WaitBar from "./components/WaitBar/WaitBar";
import ReadyBar from "./components/ReadyBar/ReadyBar";
import SearchBar from "./components/SearchBar";
import {useAppSelector} from "../../store/store";


const SearchPage = () => {
    const isRollUp = useAppSelector((state) => state.job.isRollUp)

    return (
        <div className={`searchPage ${isRollUp && 'isRollUp'}`} >
            <WaitBar/>
            <SearchBar/>
            <ReadyBar/>
        </div>
    );
};

export default SearchPage;