import { red } from "@material-ui/core/colors"
import {createMuiTheme} from "@material-ui/core/styles"

const themeOptions = {
    palette:{
        primary: {
            main: '#E7DDB8'
        },
        secondary: {
            main: '#33322A'
        },
        text:{
            primary: "#33322A",
            secondary: "#FFF"
        },
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: [
            '"Gibson"',
            'sans-serif',
        ].join(','),
        useNextVariants: true,
        h1: {
            fontWeight: 700,
            fontSize: '60px',
            textTransform: 'uppercase',
        },
        h3: {
            fontSize: '43px',
            textTransform: 'uppercase',
        },
        h4: {
            fontWeight: 600,
            textTransform: 'uppercase',
        },
        h5: {
            fontSize: '30px',
            fontWeight: '400',
        },
        h6: {
            fontWeight: 600,
            fontSize: '17px',
            textTransform: 'uppercase',
        },
        body1: {
          fontSize: '20px',
          color: '#4B4B4B',

        },
        body2: {
            fontSize: '17px',
            lineHeight: '30px',
        },
        subtitle2: {
            fontSize: '8px',
        },
    },
    spacing: 10,
    overrides: {
        MuiTextField: {
            root: {
                width: '100%'
            }
        }
    },
};
export const Theme = createMuiTheme({
    ...themeOptions,
});