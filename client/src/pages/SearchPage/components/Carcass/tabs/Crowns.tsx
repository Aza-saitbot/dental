import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {ReactComponent as ShowIcon} from "../../../../../assets/arrow-down.svg";
import React from 'react';
import {useStylesIntegration} from "../../../utility/utility";
import {Controller, useFormContext} from 'react-hook-form';

const arrayImplants=[
    {id:1,value:'Цементная фиксация'},
    { id:2,value:'Винтовая фиксация'}
]
const arrayAbatment=[
    {id:1,value:'CoCri'},
    { id:2,value:'ZrO2'},
    { id:3,value:'Procera'},
    { id:4,value:'Ti'},
]
const arrayRootTab=[
    {id:1,value:'Kxc'},
    { id:2,value:'Неразборная'},
    { id:3,value:'Е-Max press Kxc'},
    { id:4,value:'ZrO2'},
    { id:5,value:'Разборная'},
]
const arrayTemporaryCrown=[
    {id:1,value:'На имплантате'},
    { id:2,value:'Армированная'},
    { id:3,value:'Культя'},
    { id:4,value:'Multilayer CAD/CAM'},
    { id:5,value:'Акриловая'},
]

const Crowns = () => {
    const {control} = useFormContext();
    const classes=useStylesIntegration()

    return (
        <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__select">
            <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__select__item">
                <Controller
                name="implants"
                control={control}
                render={({field:{value,onChange}})=>
                    <FormControl fullWidth>
                        <InputLabel id="implants-label">Коронка на имплантате</InputLabel>
                        <Select
                            labelId="implants-label"
                            label="Коронка на имплантате"
                            IconComponent={ShowIcon}
                            // MenuProps={{ classes: { list: classes.list } }}
                            variant="outlined"
                            value={value}
                            onChange={onChange}

                        >
                            {arrayImplants?.map((item) => (
                                <MenuItem className={classes.select} key={item.id}
                                          value={item.value}>
                                    {item.value}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                }
                />
            </div>
            <div>
                <Controller
                    name="abatment"
                    control={control}
                    render={({field:{value,onChange}})=>
                        <FormControl fullWidth>
                            <InputLabel id="abatment-label">Индивидуальный абатмент</InputLabel>
                            <Select
                                labelId="abatment-label"
                                label="Индивидуальный абатмент"
                                IconComponent={ShowIcon}
                                // MenuProps={{ classes: { list: classes.list } }}
                                variant="outlined"
                                value={value}
                                onChange={onChange}
                            >
                                {arrayAbatment?.map((item) => (
                                    <MenuItem className={classes.select} key={item.id}
                                              value={item.value}>
                                        {item.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    }
                />
            </div>
            <div>
                <Controller
                    name="rootTab"
                    control={control}
                    render={({field:{value,onChange}})=>
                        <FormControl fullWidth>
                            <InputLabel id="rootTab-label">Корневая вкладка</InputLabel>
                            <Select
                                labelId="rootTab-label"
                                label="Корневая вкладка"
                                IconComponent={ShowIcon}
                                // MenuProps={{ classes: { list: classes.list } }}
                                variant="outlined"
                                value={value}
                                onChange={onChange}
                            >
                                {arrayRootTab?.map((item) => (
                                    <MenuItem className={classes.select} key={item.id}
                                              value={item.value}>
                                        {item.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    }
                />
            </div>
            <div>
                <Controller
                    name="temporaryCrown"
                    control={control}
                    render={({field:{value,onChange}})=>
                        <FormControl fullWidth>
                            <InputLabel id="temporaryCrown-label">Временная коронка</InputLabel>
                            <Select
                                labelId="temporaryCrown-label"
                                label="Временная коронка"
                                IconComponent={ShowIcon}
                                // MenuProps={{ classes: { list: classes.list } }}
                                variant="outlined"
                                value={value}
                                onChange={onChange}
                            >
                                {arrayTemporaryCrown?.map((item) => (
                                    <MenuItem className={classes.select} key={item.id}
                                              value={item.value}>
                                        {item.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    }
                />
            </div>
        </div>
    );
};

export default Crowns;