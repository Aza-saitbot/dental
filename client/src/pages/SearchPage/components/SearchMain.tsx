import React, {FC, useState} from 'react';
import '../SearchPage.scss'
import SearchIcon from '@mui/icons-material/Search';
import {useStylesSearch} from "../../../useStyles/useStyles";
import TechnicalTask from "./TechnicalTask/TechnicalTask";
import Carcass from "./Carcass/Carcass";
import DataPackerDental from "./DatePacker/DataPackerDental";

type PropsType = {}


const tabsSearch = [
    {id: 1, title: 'Техническое задание', Component: TechnicalTask},
    {id: 2, title: 'Каркас и виды работ', Component: Carcass},
    {id: 3, title: 'Дизайн промежуточной части', Component: TechnicalTask},
    {id: 4, title: 'Срок исполнения', Component: DataPackerDental},
]


const SearchMain = () => {
    const [visible, setVisible] = useState(false)
    const [selectTab, setSelectTab] = useState(0)

    const activeVisible = (tab:number) => {
        setVisible(prevState => {
            return !(prevState && tab === selectTab);
        })
        setSelectTab(tab)
    }


    const classes = useStylesSearch()
    return (
        <>
            <div className="searchPage__content__item__search__mainSearch">
                <div className="searchPage__content__item__search__mainSearch__item">
                    {tabsSearch.map(i =>
                        <div key={i.id}
                             className={selectTab === i.id
                                 ? "searchPage__content__item__search__mainSearch__item__detail active"
                                 : "searchPage__content__item__search__mainSearch__item__detail"}
                             onClick={() => activeVisible(i.id)}>
                            <div className="main__content__mainSearch__item__detail__title"><h3>{i.title}</h3></div>
                        </div>
                    )}
                    <div className="searchPage__content__item__search__mainSearch__item__buttonWrapper">
                        <button
                            type="submit"
                            className={classes.root}>
                            <SearchIcon/>
                            Искать
                        </button>
                    </div>
                </div>
            </div>
            {visible && tabsSearch.map(({Component, id}) => {
                    if (id === selectTab) {
                        return <Component key={id}/>
                    }
                    return null
                }
            )}
        </>
    );
};

export default SearchMain;