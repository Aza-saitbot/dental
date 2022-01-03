import React, {Component, useEffect, useState} from 'react';
import '../SearchPage.scss'
import MainBackground from '../../../assets/protez.jpg'
import SearchMain from "./SearchMain";
import {FormProvider, useForm} from "react-hook-form";
import TechnicalTask from "./TechnicalTask/TechnicalTask";
import SearchIcon from "@mui/icons-material/Search";
import {useStylesSearch} from "../../../useStyles/useStyles";
import Carcass from "./Carcass/Carcass";
import DesignTooth from "./DesignTooth/DesignTooth";
import DataPackerDental from './DatePacker/DataPackerDental';


const tabsSearch = [
    {id: 1, title: 'Техническое задание', Component: TechnicalTask},
    {id: 2, title: 'Каркас и виды работ', Component: Carcass},
    {id: 3, title: 'Дизайн промежуточной части', Component: DesignTooth},
    {id: 4, title: 'Срок исполнения', Component: DataPackerDental},
]

const SearchBar = () => {
    const [drag, setDrag] = useState(false)
    const [currentFiles, setCurrentFiles] = useState<any>()
    const [visible, setVisible] = useState(false)
    const [selectTab, setSelectTab] = useState(0)

    const activeVisible = (tab: number) => {
        setVisible(prevState => {
            return !(prevState && tab === selectTab);
        })
        setSelectTab(tab)
    }


    const classes = useStylesSearch()

    const methods = useForm({
        mode: 'onSubmit',
    });


    const onSubmit = (data: any) => {
        console.log('data', data)
    }

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setDrag(false)
    }


    function onDropHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        // @ts-ignore
        let files = [...e.dataTransfer.files]
        setCurrentFiles(files)
        const formData = new FormData()
        formData?.forEach((item) => formData.append("files", item))
        if (currentFiles?.length > 0) {
            for (let i = 0; i < currentFiles?.length; i++) {
                formData.append('files[]', currentFiles[i]);
            }
            console.log('files', formData.getAll('files[]'))
        }
        setDrag(false)

    }

    return (
        <div className="searchPage__content">
            <div className="searchPage__content__item">
                <img src={MainBackground}/>
                <div className="searchPage__content__item__search">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <div className="searchPage__content__item__search__mainSearch">
                                <div className="searchPage__content__item__search__mainSearch__item">
                                    {tabsSearch.map(i =>
                                        <div key={i.id}
                                             className={selectTab === i.id
                                                 ? "searchPage__content__item__search__mainSearch__item__detail active"
                                                 : "searchPage__content__item__search__mainSearch__item__detail"}
                                             onClick={() => activeVisible(i.id)}>
                                            <div className="main__content__mainSearch__item__detail__title">
                                                <h3>{i.title}</h3></div>
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
                                        return (
                                                <Component key={id} />
                                        )
                                    }
                                    return null
                                }
                            )}
                            <div className="searchPage__content__item__search__dropzone">
                                {drag
                                    ? <div
                                        onDragStart={e => dragStartHandler(e)}
                                        onDragLeave={e => dragLeaveHandler(e)}
                                        onDragOver={e => dragStartHandler(e)}
                                        onDrop={e => onDropHandler(e)}
                                        className="searchPage__content__item__search__dropzone__area"><p>Отпустите
                                        файлы, что бы загруить их</p></div>
                                    : <div
                                        onDragStart={e => dragStartHandler(e)}
                                        onDragLeave={e => dragLeaveHandler(e)}
                                        onDragOver={e => dragStartHandler(e)}
                                        className="searchPage__content__item__search__dropzone__move">
                                        <div style={{position: "relative"}}>
                                            <input type="file" style={{
                                                opacity: 0,
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",
                                                bottom: '25px',
                                                zIndex: 2
                                            }}/>
                                            <p>Перетащите файлы, чтобы загрузить их</p></div>
                                    </div>

                                }
                            </div>

                        </form>
                    </FormProvider>
                </div>
            </div>

        </div>
    );
};

export default SearchBar;