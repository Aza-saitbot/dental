import React from 'react';
import '../../SearchPage.scss'
import Photo1 from "../../../../assets/foto1.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const arrayDentalTechnician=[
    {id:1,name:"Azamat",town:"Кумертау",status:"wait",online:true },
    {id:2,name:"Alina",town:"Казань",status:"wait",online:false },
    {id:3,name:"Вадим",town:"Мелеуз",status:"wait",online:true },
    {id:4,name:"Эльвира",town:"Оренбург",status:"wait",online:false },
    {id:5,name:"Azamat",town:"Кумертау",status:"wait",online:false },
    {id:6,name:"Лейсан",town:"Стерлитамак",status:"wait",online:true },
]

const WaitBar = () => {
    return (
        <div className="searchPage__wait">
            <h3 className="searchPage__wait__title">В работе</h3>
            <div className="searchPage__wait__list">
                {
                    arrayDentalTechnician?.map(person=>
                        <div key={person.id} className="searchPage__wait__list__item">
                            <div className="searchPage__wait__list__item__photo">
                                <img src={Photo1}/>
                                <span className={person.online ? "searchPage__wait__list__item__photo__online" :""}>{' '}</span>

                            </div>
                            <div className="searchPage__wait__list__item__name">{person.name}</div>
                            <div className="searchPage__wait__list__item__city"><LocationOnIcon/> <p>{person.town}</p></div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default WaitBar;