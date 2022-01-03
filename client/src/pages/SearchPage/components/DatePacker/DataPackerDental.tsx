import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import '../../SearchPage.scss'

const DataPackerDental = () => {
    const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
    
    console.log('value',value)
    
    return (
        <div className="searchPage__content__item__search__mainSearch__carcass__tabs__tab__datePacket">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                    startText="Когда начать"
                    endText="Когда закончить"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                           <span style={{marginRight:10}}>c</span> <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> по </Box>
                            <TextField {...endProps} />
                        </React.Fragment>
                    )}
                />
            </LocalizationProvider>
        </div>
    );
};

export default DataPackerDental;