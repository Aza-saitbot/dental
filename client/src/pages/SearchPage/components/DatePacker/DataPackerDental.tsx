import * as React from 'react';
import {FC} from 'react';
import {DateRange} from '@mui/lab/DateRangePicker';
import '../../SearchPage.scss'
import {DatePickerAsController} from "../../../../utils/DatePickerAsController";
import {useFormContext} from "react-hook-form";


const DataPackerDental= () => {
      const [value, onChange] = React.useState<DateRange<Date>>([null, null]);
    const {control} = useFormContext();

    const date=DatePickerAsController({value,onChange,control,name:'datePicker'})

    return (
        <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__datePacket">
              //  {/*{date}*/}
            Date
        </div>
    );
};

export default DataPackerDental;