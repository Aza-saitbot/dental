import React from 'react';
import './SearchPage.scss'
import WaitBar from "./components/WaitBar/WaitBar";
import ReadyBar from "./components/ReadyBar/ReadyBar";
import SearchBar from "./components/SearchBar";


const SearchPage = () => {
    return (
        <div className="searchPage" >
            <WaitBar/>
            <SearchBar/>
            <ReadyBar/>
        </div>
    );
};

export default SearchPage;