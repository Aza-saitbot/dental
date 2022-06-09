import React, {Component, useState} from 'react';
import '../SearchPage.scss'
import MainBackground from '../../../assets/protez.jpg'
import {FormProvider, useForm} from "react-hook-form";
import TechnicalTask from "./TechnicalTask/TechnicalTask";
import SearchIcon from "@mui/icons-material/Search";
import {useStylesSearch} from "../../../useStyles/useStyles";
import Carcass from "./Carcass/Carcass";
import DesignTooth from "./DesignTooth/DesignTooth";
import DataPackerDental from './DatePacker/DataPackerDental';
import {SearchSchemaType} from "../../../types/RequestOptionsType";
import {useDispatch} from "react-redux";
import {createJobApi} from "../../../api/apiJob";
import {DateRange} from "@mui/lab/DateRangePicker";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const tabsSearch = [
    {id: 1, title: 'Техническое задание', Component: TechnicalTask},
    {id: 2, title: 'Каркас и виды работ', Component: Carcass},
    {id: 3, title: 'Дизайн промежуточной части', Component: DesignTooth},
    {id: 4, title: 'Срок исполнения', Component: DataPackerDental},
]

const defaultValues = {
    abatment: '',
    carcass: [],
    colorRestorations: '',
    colorTeeth: '',
    datePicker: [],
    designCarcass: '',
    implants: '',
    intermediatePart: 0,
    rootTab: '',
    shoulder: '',
    teeth: [],
    temporaryCrown: '',
    tz: '',
}

const SearchBar = () => {
    const [drag, setDrag] = useState(false)
    const [currentFiles, setCurrentFiles] = useState<Array<File>>([])
    const [visible, setVisible] = useState(false)
    const [selectTab, setSelectTab] = useState<number>(0)
    const [previewImages, setPreviewImages] = useState<any>([])
    const dispatch = useDispatch()

    console.log('previewImages', previewImages)

    const activeVisible = (tab: number) => {
        setVisible(prevState => {
            return !(prevState && tab === selectTab);
        })
        setSelectTab(tab)
    }


    const classes = useStylesSearch()

    const methods = useForm({
        mode: 'onSubmit',
        defaultValues
    })


    const onSubmit = (data: SearchSchemaType) => {
        console.log('data', data)
        const formData = new FormData()

        formData.append('tz', data.tz)
        data?.abatment && formData.append('abatment', data.abatment)
        formData.append('colorRestorations', data.colorRestorations)
        formData.append('colorTeeth', data.colorTeeth)
        data.designCarcass && formData.append('designCarcass', data.designCarcass)
        data?.implants && formData.append('implants', data.implants)
        data?.intermediatePart && formData.append('intermediatePart', `${data.intermediatePart}`)
        data?.rootTab && formData.append('rootTab', data.rootTab)
        data?.shoulder && formData.append('shoulder', data.shoulder)
        data.temporaryCrown && formData.append('temporaryCrown', data.temporaryCrown)

        formData.append('datePicker', JSON.stringify(data.datePicker))
        formData.append('teeth', JSON.stringify(data.teeth))
        formData.append('carcass', JSON.stringify(data.carcass))
        currentFiles.forEach((item) => formData.append("files", item))

        console.log(formData.getAll("files"))

        dispatch(createJobApi(formData))

    }

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setDrag(false)
    }


    console.log('currentFiles', currentFiles)

    function onDropHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        // @ts-ignore
        let files = [...e.dataTransfer.files]

        setCurrentFiles(files)
        setDrag(false)
    }


    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="searchPage__content">
                    <div className="searchPage__content__item">

                        <div className="searchPage__content__item__search">

                            <div className="searchPage__content__item__search__dropzone">
                                {drag
                                    ? <div
                                        onDragStart={e => dragStartHandler(e)}
                                        onDragLeave={e => dragLeaveHandler(e)}
                                        onDragOver={e => dragStartHandler(e)}
                                        onDrop={e => onDropHandler(e)}
                                        className="searchPage__content__item__search__dropzone__area"><p>Отпустите
                                        файлы, что бы загрузить их</p></div>
                                    : <div
                                        onDragStart={e => dragStartHandler(e)}
                                        onDragLeave={e => dragLeaveHandler(e)}
                                        onDragOver={e => dragStartHandler(e)}
                                        className="searchPage__content__item__search__dropzone__move">
                                        <div>
                                            <div className="searchPage__content__item__search__dropzone__move__preview">
                                                {currentFiles.map((i, index) => {

                                                    let imgUrl = URL.createObjectURL(i)

                                                    return (
                                                        <div key={index}
                                                             className="searchPage__content__item__search__dropzone__move__preview__item">
                                                            <div
                                                                className="searchPage__content__item__search__dropzone__move__preview__item__image">
                                                                <img src={imgUrl}/>
                                                                <DeleteOutlineOutlinedIcon
                                                                    onClick={() => setCurrentFiles(currentFiles.filter((m: File) => m !== i))}
                                                                    fontSize={"small"}
                                                                    className="searchPage__content__item__search__dropzone__move__preview__item__image__icon"
                                                                />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                            {currentFiles.length === 0 &&
                                                <div
                                                    className="searchPage__content__item__search__dropzone__move__title"
                                                >Перетащите файлы, чтобы загрузить их</div>
                                            }
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default SearchBar;