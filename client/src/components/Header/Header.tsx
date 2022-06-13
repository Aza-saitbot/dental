import * as React from 'react';
import './Header.scss'
import LogoCompanyIcon from "../../assets/logo.png";
import {useHistory} from "react-router-dom";
import {MAIN_ROUTE} from "../../utils/consts";
import DropdownProfile from "../DropdownProfile";
import SearchIcon from "@mui/icons-material/Search";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {useStylesSearch} from "../../useStyles/useStyles";
import {useForm} from "react-hook-form";
import {SearchSchemaType} from "../../types/RequestOptionsType";
import {createJobApi} from "../../api/apiJob";
import TechnicalTask from "../../pages/SearchPage/components/TechnicalTask/TechnicalTask";
import Carcass from "../../pages/SearchPage/components/Carcass/Carcass";
import DesignTooth from "../../pages/SearchPage/components/DesignTooth/DesignTooth";
import DataPackerDental from "../../pages/SearchPage/components/DatePacker/DataPackerDental";
import {useAppSelector} from "../../store/store";
import {setIsRollUp} from "../../store/reducers/JobSlice";
import {useOutsideClick} from "../../utils/hooks/useOutsideClick";

const tabsSearch = [
     {id: 0, title: 'Задание', Component: TechnicalTask},
    {id: 1, title: 'Виды работы', Component: Carcass},
    // {id: 2, title: 'Дизайн', Component: DesignTooth},
    {id: 2, title: 'когда закончить?', Component: DataPackerDental},
]
const rollupTop = [
    {id: 1, title: 'Стоматолги'},
    {id: 2, title: 'Зубные техники'},
]
const rollupTabsSearch = [
    {id: 0, title: 'Задание', question: 'Техническое задание', Component:TechnicalTask},
     {id: 1, title: 'Каркас', question: 'Выбор материала', Component:Carcass},
    // {id: 2, title: 'Дизайн',question:'Техническое задание', Component: DesignTooth},
    {id: 2, title: 'Срок', question: 'когда завершить?', Component: DataPackerDental},
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

const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const refHeader = useRef<HTMLDivElement>(null)
    const refTabs = useRef<HTMLDivElement>(null)
    const isRollUp = useAppSelector((state) => state.job.isRollUp)
    const [currentFiles, setCurrentFiles] = useState<Array<File>>([])
    const [visible, setVisible] = useState(true)
    const [selectTab, setSelectTab] = useState<number>(0)
    const [selectTabTop, setSelectTabTop] = useState<number>(1)


    const activeVisible = (tab: number) => {
        setVisible(prevState => {
            return !(prevState && tab === selectTab);
        })
        setSelectTab(tab)

        dispatch(setIsRollUp(true))

    }

    useOutsideClick(refHeader, () => dispatch(setIsRollUp(false)), refHeader);
    useOutsideClick(refTabs, () => dispatch(setVisible(false)), refTabs);


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
    
    console.log('current',rollupTabsSearch[selectTab])

    const activeSelectTab = (tabId:number) => {
        setSelectTab(tabId)
        setVisible(true)
    }


    const getSelectedTab=(Component:()=> JSX.Element)=> <Component/>

    return (
        <div ref={refHeader}
             className={`header ${isRollUp && 'isRollUp'} `}>
            <div className="header__logo">
                <div onClick={() => history.push(MAIN_ROUTE)} className="header__logo__item">
                    <img src={LogoCompanyIcon} alt="logo"/>
                </div>
            </div>
            {isRollUp
                ? <div className="header__rollup">
                    <div className="header__rollup__top">{
                        rollupTop.map(({id, title}) =>
                            <div
                                onClick={() =>  setSelectTabTop(id)}
                                className={`header__rollup__top__item ${selectTabTop === id && 'selected'}`}
                                key={id}>{title}</div>
                        )
                    }</div>
                    <div className="header__rollup__list">
                        {rollupTabsSearch.map(i =>
                            <div key={i.id}
                                 className={`header__rollup__list__item ${selectTab === i.id ? 'selected' : ''}
                            ${3 === i.id ? 'search' : ''}
                            `}
                                 onClick={()=>activeSelectTab(i.id)}
                            >
                                <div>
                                    <div className="header__rollup__list__item_title">
                                        {i.title}
                                    </div>
                                    <div className="header__rollup__list__item_question">
                                        {i.question}
                                    </div>
                                </div>
                                {i.id === 3 && <button
                                    className="header__rollup__list__item__search ">
                                    <SearchIcon/>
                                    Искать
                                </button>}
                            </div>
                        )}

                        {visible &&
                            <div ref={refTabs} className="header__rollup__list__tabs">
                                {rollupTabsSearch[selectTab]
                                    && getSelectedTab(rollupTabsSearch[selectTab]?.Component)}
                            </div>
                        }

                    </div>
                </div>
                : <div className="header__mainSearch">
                    <div onClick={() => dispatch(setIsRollUp(true))}
                         className="header__mainSearch__item">
                        {tabsSearch.map(i =>
                            <div key={i.id}
                                 className={i.id === 1
                                     ? "header__mainSearch__item__detail borderStyle"
                                     : "header__mainSearch__item__detail"}>
                                <div className="mainSearch__item__detail__title">
                                    {i.title}</div>
                            </div>
                        )}
                        <div className="header__mainSearch__item__buttonWrapper">
                            <button
                                className="header__mainSearch__item__buttonWrapper__search">
                                <SearchIcon/>
                            </button>
                        </div>
                    </div>
                </div>
            }


            <div className="header__menu">
                <DropdownProfile/>
            </div>
        </div>
    )
};

export default Header;

{/*   {methods.formState.isDirty &&
                            <div
                                className="header__rollup">
                                <div
                                    className="header__rollup">
                                    <DeleteOutlineOutlinedIcon style={{borderRadius: '50%'}}
                                                               className="header__rollup"
                                                               onClick={() => {
                                                                   setCurrentFiles([])
                                                                   methods.reset(defaultValues)
                                                               }}
                                    />
                                </div>
                            </div>
                        }*/}