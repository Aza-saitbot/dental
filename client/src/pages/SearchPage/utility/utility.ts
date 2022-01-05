
import tooth11 from '../../../assets/tooths/11.png'
import tooth12 from '../../../assets/tooths/12.png'
import tooth13 from '../../../assets/tooths/13.png'
import tooth14 from '../../../assets/tooths/14.png'
import tooth15 from '../../../assets/tooths/15.png'
import tooth16 from '../../../assets/tooths/16.png'
import tooth17 from '../../../assets/tooths/17.png'
import tooth18 from '../../../assets/tooths/18.png'
import tooth21 from '../../../assets/tooths/21.png'
import tooth22 from '../../../assets/tooths/22.png'
import tooth23 from '../../../assets/tooths/23.png'
import tooth24 from '../../../assets/tooths/24.png'
import tooth25 from '../../../assets/tooths/25.png'
import tooth26 from '../../../assets/tooths/26.png'
import tooth27 from '../../../assets/tooths/27.png'
import tooth28 from '../../../assets/tooths/28.png'
import tooth31 from '../../../assets/tooths/31.png'
import tooth32 from '../../../assets/tooths/32.png'
import tooth33 from '../../../assets/tooths/33.png'
import tooth34 from '../../../assets/tooths/34.png'
import tooth35 from '../../../assets/tooths/35.png'
import tooth36 from '../../../assets/tooths/36.png'
import tooth37 from '../../../assets/tooths/37.png'
import tooth38 from '../../../assets/tooths/38.png'
import tooth41 from '../../../assets/tooths/41.png'
import tooth42 from '../../../assets/tooths/42.png'
import tooth43 from '../../../assets/tooths/43.png'
import tooth44 from '../../../assets/tooths/44.png'
import tooth45 from '../../../assets/tooths/45.png'
import tooth46 from '../../../assets/tooths/46.png'
import tooth47 from '../../../assets/tooths/47.png'
import tooth48 from '../../../assets/tooths/48.png'
import {makeStyles} from "@material-ui/styles";


export const arrayTeeth=[
    {id:11,value:false,src:tooth11},
    {id:12,value:false,src:tooth12},
    {id:13,value:false,src:tooth13},
    {id:14,value:false,src:tooth14},
    {id:15,value:false,src:tooth15},
    {id:16,value:false,src:tooth16},
    {id:17,value:false,src:tooth17},
    {id:18,value:false,src:tooth18},
    {id:21,value:false,src:tooth21},
    {id:22,value:false,src:tooth22},
    {id:23,value:false,src:tooth23},
    {id:24,value:false,src:tooth24},
    {id:25,value:false,src:tooth25},
    {id:26,value:false,src:tooth26},
    {id:27,value:false,src:tooth27},
    {id:28,value:false,src:tooth28},
    {id:31,value:false,src:tooth31},
    {id:32,value:false,src:tooth32},
    {id:33,value:false,src:tooth33},
    {id:34,value:false,src:tooth34},
    {id:35,value:false,src:tooth35},
    {id:36,value:false,src:tooth36},
    {id:37,value:false,src:tooth37},
    {id:38,value:false,src:tooth38},
    {id:41,value:false,src:tooth41},
    {id:42,value:false,src:tooth42},
    {id:43,value:false,src:tooth43},
    {id:44,value:false,src:tooth44},
    {id:45,value:false,src:tooth45},
    {id:46,value:false,src:tooth46},
    {id:47,value:false,src:tooth47},
    {id:48,value:false,src:tooth48},
]

type ArrayCarcassType= {id: number, title: string, name: string, value: boolean}

export const arrayCarcass:Array<ArrayCarcassType>=[
    {id:1, title:'Е-Max с нанесением керамики', name:'eMaxWithCeramic', value:false},
    {id:2, title:'Е-Max окрашивание полная анатомия', name:'eMaxStainingAnatomy', value:false},
    {id:3, title:'ZrO2 с нанесением керамики', name:'zr02WithCeramic', value:false},
    {id:4, title:'ZrO2 с окрашивание полная анатомия',name:'zr02WithStatingAnatomy',value:false},
    {id:5, title:'CoCr CAD/CAM Sintron', name:'coCrCadCam', value:false},
    {id:6, title:'MK', name:'MK', value:false},
    {id:7, title:'Коронка(промежуточная)', name:'crownIntermediate', value:false},
    {id:8, title:'Коронка на имплантате', name:'implantCrown', value:false},
    {id:9, title:'Инлей / Онлей', name:'inlayOnlay', value:false},
    {id:10, title:'Wax Up CAD/CAM', name:'waxUpCadCam', value:false},
    {id:11, title:'Max Up', name:'maxUp', value:false},
    {id:12, title:'Индивидуальная слепочная ложка', name:'individualImpressionTray', value:false},
    {id:13, title:'Съемный протез', name:'removableDenture', value:false},
    {id:14, title:'Бюгельный протез', name:'claspProsthesis', value:false},
    {id:15, title:'Диагностическая модель', name:'diagnosticModel', value:false},
    {id:16, title:'3D модель (стереолитографическая)', name:'3dModel', value:false},
    {id:17, title:'AII on 4', name:'allOn4', value:false},
    {id:18, title:'AII on 6)', name:'allOn6', value:false},
    {id:19, title:'Мамелоны)',name:'mamelons',value:false},
    {id:20, title:'Разрывы эмали', name:'enamelTears', value:false},
    {id:21, title:'Вторичный дентин', name:'secondaryDentin', value:false},
    {id:22, title:'Окрашенные фиссуры', name:'paintedFissures', value:false},
]

export const useStylesIntegration = makeStyles({
    root: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fonWeight: 'normal',
        fontSize: 18,
        height: 65,
        color: '#333333',
        //
        // '&.MuiOutlinedInput-root': {
        //     fontFamily: 'Inter',
        //     fontStyle: 'normal',
        //     fonWeight: 'normal',
        //     fontSize: 18,
        //     // borderRadius: 6,
        //     // background: '#F4F9FF',
        //     boxShadow: 'inset 0px 1px 2px rgba(0, 0, 0, 0.2)',
        //     color: '#333333',
        // },
        //
        // '& .MuiOutlinedInput-notchedOutline': {
        //     // border: 'none !important',
        // },
    },
    list: {
        // background: '#F4F9FF',
    },
    select: {
        background: 'white',
        width:'100%',
        //
        // '&.MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input.MuiSelect-select': {
        //     width:'100%',
        //
        // },
        //
        // '&.MuiSelect-outlined': {
        //     // background: '#F4F9FF',
        //     // margin: 2,
        // },
        //
        // // background: '#F4F9FF',
        // '&.MuiPaper-root': {
        //     background: '#F4F9FF',
        // },
        //
        // '&.MuiMenuItem-root:hover': {
        //     // background: '#ffe1cc5e',
        //     borderRadius: 6,
        //     // margin: '0 5px 0 5px',
        // },
        // '&.Mui-selected': {
        //     // background: '#FFE1CC !important',
        //     borderRadius: 6,
        //     // margin: '0 5px 0 5px',
        //
        //     '&.Mui-selected:hover': {
        //         backgroundColor: '#FFE1CC',
        //         // margin: '0 5px 0 5px',
        //     },
        // },
    },
    iconStyle: {
        position: 'absolute',
        top: 20,
        right: 20,
        color: '#c0c0c0',
        width: '15px',
        height: '15px',
        pointerEvents: 'none',
    },
    focused: {
        border: '3px solid #8BACFF',
    },
});

