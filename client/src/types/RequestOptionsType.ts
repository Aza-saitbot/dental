import {DateRange} from "@mui/lab/DateRangePicker";


export interface SearchSchemaType {
    abatment?: string
    carcass: Array<{ [key: string]: boolean }>
    colorRestorations: string
    colorTeeth: string
    datePicker: Array<DateRange<Date> | null>
    designCarcass?: string
    implants?: string
    intermediatePart: 2
    rootTab?: string
    shoulder?: string
    teeth: Array<{[key: number]: boolean}>
    temporaryCrown?: string
    tz: string
}