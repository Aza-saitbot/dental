import React, {useState} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import '../../SearchPage.scss'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {ReactComponent as ShowIcon} from "../../../../assets/arrow-down.svg";
import DesignTooth1 from '../../../../assets/designTooth1.png'
import DesignTooth2 from '../../../../assets/designTooth2.png'
import DesignTooth3 from '../../../../assets/designTooth3.png'
import DesignTooth4 from '../../../../assets/designTooth4.png'
import DesignTooth5 from '../../../../assets/designTooth5.png'

import DesignCarcass1 from '../../../../assets/designCarcass1.png'
import DesignCarcass2 from '../../../../assets/designCarcass2.png'
import DesignCarcass3 from '../../../../assets/designCarcass3.png'
import DesignCarcass4 from '../../../../assets/designCarcass4.png'
import DesignCarcass5 from '../../../../assets/designCarcass5.png'
import DesignCarcass6 from '../../../../assets/designCarcass6.png'
import DesignCarcass7 from '../../../../assets/designCarcass7.png'

import DesignDesignShoulder1 from '../../../../assets/designShoulder1.png'
import DesignDesignShoulder2 from '../../../../assets/designShoulder2.png'
import DesignDesignShoulder3 from '../../../../assets/designShoulder3.png'
import ColorTeeth from '../../../../assets/colotTeeth.png'

import {useStylesIntegration} from "../../utility/utility";
import {SelectChangeEvent} from "@mui/material/Select";

const arrayIntermediatePart=[
    {id:1,img:DesignTooth1},
    { id:2,img:DesignTooth2},
    { id:3,img:DesignTooth3},
    { id:4,img:DesignTooth4},
    { id:5,img:DesignTooth5},
]
const arrayDesignCarcass=[
    {id:1,img:DesignCarcass1},
    { id:2,img:DesignCarcass2},
    { id:3,img:DesignCarcass3},
    { id:4,img:DesignCarcass4},
    { id:5,img:DesignCarcass5},
    { id:6,img:DesignCarcass6},
    { id:7,img:DesignCarcass7},
]
const arrayShoulder=[
    {id:1,img:DesignDesignShoulder1},
    { id:2,img:DesignDesignShoulder2},
    { id:3,img:DesignDesignShoulder3},
]
const arrayColorRestorations=[
    {id:1,value:"??????"},
    { id:2,value:"??????????"},
    { id:3,value:"????????????????"},
]

const DesignTooth = () => {
    const {control,register} = useFormContext();
    const classes=useStylesIntegration()
    const [intermediatePart,setIntermediatePart]=useState<number>(0)
    const [designCarcass,setDesignCarcass]=useState<number>(0)
    const [shoulder,setShoulder]=useState<number>(0)
    const [colorRestorations,setColorRestorations]=useState<number>(0)

        return (
            <div>Design</div>
        )
};

export default DesignTooth;

// <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design">
//     <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design__list">
//         <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design__list__item">
//             <Controller
//                 name="intermediatePart"
//                 control={control}
//                 render={({field:{onChange}})=>
//                     <FormControl style={{width:'200px'}}>
//                         <InputLabel id="intermediatePart-label">???????????? ?????????????????????????? ??????????</InputLabel>
//                         <Select
//                             labelId="intermediatePart-label"
//                             label="???????????? ?????????????????????????? ??????????"
//                             IconComponent={ShowIcon}
//                             MenuProps={{ classes: { list: classes.list } }}
//                             classes={{select:classes.select,root:classes.root}}
//                             value={intermediatePart}
//                             onChange={(e:SelectChangeEvent<number>)=> {
//                                 onChange(e)
//                                 setIntermediatePart(Number(e.target.value))
//                             }}
//                         >
//                             {arrayIntermediatePart?.map(({id,img}) => (
//                                 <MenuItem key={id}
//                                           value={id}>
//                                     <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design__list__item__menu">
//                                         <img src={img} alt="img"/>
//                                     </div>
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                 }
//             />
//         </div>
//         <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design__list__item">
//             <Controller
//                 name="designCarcass"
//                 control={control}
//                 render={({field:{onChange}})=>
//                     <FormControl style={{width:'200px'}}>
//                         <InputLabel id="carcass-label">????????????</InputLabel>
//                         <Select
//                             labelId="carcass-label"
//                             label="????????????"
//                             defaultValue={0}
//                             IconComponent={ShowIcon}
//                             MenuProps={{ classes: { list: classes.list } }}
//                             classes={{select:classes.select,root:classes.root}}
//                             value={designCarcass}
//                             onChange={(e:SelectChangeEvent<number>)=>{
//                                 onChange(e)
//                                 setDesignCarcass(Number(e.target.value))
//                             }}
//                         >
//                             {arrayDesignCarcass?.map(({id,img}) => (
//                                 <MenuItem key={id}
//
//                                           value={id}>
//                                     <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design__list__item__menu">
//                                         <img src={img} alt="img"/>
//                                     </div>
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                 }
//             />
//         </div>
//         <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design__list__item">
//             <Controller
//                 name="shoulder"
//                 control={control}
//                 render={({field:{onChange}})=>
//                     <FormControl style={{width:'200px'}}>
//                         <InputLabel id="shoulder-label">??????????</InputLabel>
//                         <Select
//                             labelId="shoulder-label"
//                             label="??????????"
//                             IconComponent={ShowIcon}
//                             MenuProps={{ classes: { list: classes.list } }}
//                             classes={{select:classes.select,root:classes.root}}
//                             value={shoulder}
//                             onChange={(e:SelectChangeEvent<number>)=>{
//                                 onChange(e)
//                                 setShoulder(Number(e.target.value))
//                             }}
//                         >
//                             {arrayShoulder?.map(({id,img}) => (
//                                 <MenuItem key={id}
//                                           value={id}>
//                                     <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design__list__item__menu">
//                                         <img src={img} alt="img"/>
//                                     </div>
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                 }
//             />
//         </div>
//         <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design__list__item">
//             <Controller
//                 name="colorRestorations"
//                 control={control}
//                 render={({field:{onChange}})=>
//                     <FormControl style={{width:'200px'}}>
//                         <InputLabel id="colorRestorations-label">???????????????? ??????????????????????</InputLabel>
//                         <Select
//                             labelId="colorRestorations-label"
//                             label="???????????????? ??????????????????????"
//                             IconComponent={ShowIcon}
//                             MenuProps={{ classes: { list: classes.list } }}
//                             classes={{select:classes.select,root:classes.root}}
//                             value={colorRestorations}
//                             onChange={(e:SelectChangeEvent<number>)=> {
//                                 onChange(e)
//                                 setColorRestorations(Number(e.target.value))
//                             }}
//                         >
//                             {arrayColorRestorations?.map(({id,value}) => (
//                                 <MenuItem key={id}
//                                           value={id}>
//                                     <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design__list__item__menu">
//                                         <p>{value}</p>
//                                     </div>
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                 }
//             />
//         </div>
//     </div>
//     <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design__colorTeeth">
//         <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design__colorTeeth__input">
//             <input
//                 placeholder="?????????????? ????????"
//                 {...register('colorTeeth')} type="text"/>
//         </div>
//         <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__design__colorTeeth__teeth">
//             <img src={ColorTeeth} alt="img"/>
//         </div>
//     </div>
// </div>