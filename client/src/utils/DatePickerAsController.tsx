import React from 'react';
import {Controller} from 'react-hook-form';
import {TextField} from '@mui/material';
import Box from "@mui/material/Box";
import DateRangePicker, {DateRange} from "@mui/lab/DateRangePicker";

export interface DatePickerAsControllerProps {
    control: any;
    name: string;
    value: DateRange<Date>;
    rules?: any;
    classes?: string[];
    label?: string;
    onChange: (date: DateRange<Date>) => void;
}

export function DatePickerAsController(props: DatePickerAsControllerProps) {
    const { control, name, rules, onChange, value } =
        props;

    const handleChange = (date: DateRange<Date>, field: any) => {
        field.onChange(date);
        onChange(date);
    };

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field }) => (
                <DateRangePicker
                    startText="Когда начать"
                    endText="Когда закончить"
                    inputFormat="dd.MM.yyyy"
                    value={value}
                    onChange={(newValue) => handleChange(newValue,field)}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> - </Box>
                            <TextField {...endProps} />
                        </React.Fragment>
                    )}
                />
            )}
        />
    );
}