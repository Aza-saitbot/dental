import React, {useState} from 'react';
import '../../SearchPage.scss'
import Crowns from "./tabs/Crowns";
import Other from "./tabs/Other";


const tabsCarcass=[
    {id:1,title:'Все',Component:Other},
    {id:2,title:'Выбор коронок',Component:Crowns},
]

const Carcass = () => {
const [selectTab,setSelectTab]=useState(1)


    return (
        <div className="searchPage__content__item__search__mainSearch__carcass">
            <div className="searchPage__content__item__search__mainSearch__carcass__tabs">
                <div className="searchPage__content__item__search__mainSearch__carcass__tabs__list">
                    {tabsCarcass.map(({id,title})=>
                        <div key={id}
                             className={selectTab===id
                                 ?"searchPage__content__item__search__mainSearch__carcass__tabs__list__item active"
                                 :"searchPage__content__item__search__mainSearch__carcass__tabs__list__item"
                             }
                        onClick={()=>setSelectTab(id)}
                        >
                            <div>{title}</div>
                        </div>
                    )}
                </div>
                <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab">
                    {tabsCarcass.map(({Component,id})=>{
                            if (selectTab===id){
                                return <Component/>
                            }
                            return null
                        }
                    )}
                </div>
            </div>
        </div>
    );
};

export default Carcass;