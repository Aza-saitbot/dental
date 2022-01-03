import React from 'react';
import '../../SearchPage.scss'
import Photo1 from "../../../../assets/foto1.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const arrayDentalTechnician=[
    {id:1,name:"Azamat",town:"Кумертау",status:"wait",online:true },
    {id:2,name:"Alina",town:"Казань",status:"wait",online:false },
]

const ReadyBar = () => {
    return (
        <div className="searchPage__ready">
            <h3 className="searchPage__ready__title"><LocalShippingIcon/> Готово</h3>
            <div className="searchPage__ready__list">
                {
                    arrayDentalTechnician?.map(person=>
                        <div key={person.id} className="searchPage__ready__list__item">
                            <div className="searchPage__wait__list__item__photo">
                                <img src={Photo1}/>
                                <span className={person.online ? "searchPage__ready__list__item__photo__online" :""}>{' '}</span>

                            </div>
                            <div className="searchPage__ready__list__item__name">{person.name}</div>
                            <div className="searchPage__ready__list__item__city"><LocationOnIcon/> <p>{person.town}</p></div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ReadyBar;