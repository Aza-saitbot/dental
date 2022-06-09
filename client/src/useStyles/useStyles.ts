
import {makeStyles} from "@material-ui/styles";

export const useStylesButton = makeStyles({
    root: {
        background: 'linear-gradient(30deg, rgba(46,100,213,1) 0%, rgba(1,237,213,1) 100%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(46, 100, 213, .3)',
        color: 'white !important',
        height: 48,
        padding: '0 30px',
    },
});
export const useStylesSearch = makeStyles({
    root: {

    },
    delete: {
        display:"grid",
        alignItems:'center',
        background: 'linear-gradient(38deg, rgba(241,9,9,1) 40%, rgba(244,239,238,1) 99%)',
        border: 0,
        borderRadius: 25,
        boxShadow: '0 3px 5px 2px rgb(241,9,9)',
        padding:10,
        color: 'white !important',
        fontFamily:'inherit',
        fontSize:20,
        fontWeight:500,
        cursor:'pointer'
    },

});


export const useStylesInput = makeStyles({
    root: {
        background: '#F4F9FF',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fonWeight: 'normal',
        fontSize: 18,


        '&.MuiOutlinedInput-root': {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fonWeight: 'normal',
            fontSize: 18,
            color: '#828282',
            borderRadius: 6,
            background: '#F4F9FF',
            boxShadow: 'inset 0px 1px 2px rgba(0, 0, 0, 0.2)',

        },

        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'linear-gradient(30deg, rgba(46,100,213,1) 0%, rgba(1,237,213,1) 100%)',
        },
    },

    focused: {
        border: '3px solid #8BACFF',
    },
});