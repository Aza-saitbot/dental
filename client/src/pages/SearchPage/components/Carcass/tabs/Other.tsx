import React from 'react';
import '../../../SearchPage.scss'
import {arrayCarcass} from "../../../utility/utility";
import {Controller, useFormContext} from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";

const Other = () => {
    const {control}=useFormContext()
    return (
        <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__list">
            {arrayCarcass.map(i=>
                <div key={i.id} >
                    <label className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__list__item">
                        <Controller
                            name={`carcass.${i.id}.${i.name}`}
                            control={control}
                            defaultValue={false}
                            rules={{required: true}}
                            render={({field}) =>(
                                <Checkbox {...field}/>
                            )}
                        />
                        <p>{i.title}</p>
                    </label>
                </div>
            )}
        </div>
    );
};

export default Other;