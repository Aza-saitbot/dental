import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import '../../SearchPage.scss'
import {TextareaAutosize} from "@mui/material";
import {arrayTeeth} from "../../utility/utility";
import Checkbox from '@mui/material/Checkbox';

const TechnicalTask = () => {
    const {control, register} = useFormContext();

    return (
        <div className="searchPage__content__item__search__mainSearch__technicalTaskContainer">
            <div className="searchPage__content__item__search__mainSearch__technicalTaskContainer__content">
                <div className="searchPage__content__item__search__mainSearch__technicalTaskContainer__content__text">
                    <h3>Техническое задание</h3>
                    <TextareaAutosize
                        defaultValue=''
                                      {...register('tz')}
                                      className="searchPage__content__item__search__mainSearch__technicalTaskContainer__content__text__textarea"/>
                </div>
                <div className="searchPage__content__item__search__mainSearch__technicalTaskContainer__content__teeths">
                    <div
                        className="searchPage__content__item__search__mainSearch__technicalTaskContainer__content__teeths__list">
                        {arrayTeeth.map((tooth) =>
                            <div key={tooth.id} style={{
                                borderBottom: tooth.id <= 28 ? "1px solid gray" : "",
                                borderRight: tooth.id === 18 || tooth.id === 38 ? "1px solid gray" : ""
                            }}
                            >
                                <label
                                    className="searchPage__content__item__search__mainSearch__technicalTaskContainer__content__teeths__list__item">
                                    <div
                                        className="searchPage__content__item__search__mainSearch__technicalTaskContainer__content__teeths__list__item__checkbox">
                                        <Controller
                                            name={`teeth.${tooth.id}`}
                                            control={control}
                                            defaultValue={false}
                                            rules={{required: true}}
                                            render={({field: {value, onChange}}) => (
                                                <Checkbox
                                                    value={value}
                                                    onChange={onChange}
                                                />
                                            )
                                            }
                                        />
                                    </div>
                                    <div
                                        className="searchPage__content__item__search__mainSearch__technicalTaskContainer__content__teeths__list__item__tooth">
                                        <img src={tooth.src} alt="Teeth"/></div>
                                    <div
                                        className="searchPage__content__item__search__mainSearch__technicalTaskContainer__content__teeths__list__item__number">{tooth.id}</div>
                                </label>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TechnicalTask;