/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */


export default function themePalette(theme) {
    return {
        mode: theme?.customization?.navType,
        primary: {
            light: "#EEF7E6",
            200: "#D4ECC1",
            300: "#C3E5A9",
            400: "#A5D87E",
            600: "#87CB53",
            main: "#69BE28",
            800: "#549820",
            dark: "#2A4C10"
        },
        secondary: {
            light: "#CCE1D8;",
            300: "#99C3B1",
            400: "#66A58A",
            600: "#338763",
            main: "#00693C",
            800: "#003F24",
            dark: "#002A18",
        },
        success: {
            light: "#d9f4e9",
            main: "#0F804F",
        },
        error: {
            light: "#ffe8e8",
            main: "#c30000",
            dark: "#c30000"
        },
        orange: {
            light: "#fbe9e7",
            main: "#ffab91",
            dark: "#d84315"
        },
        warning: {
            light: "#fff4e2",
            main: "#dd980a",
            dark: "#ffc107"
        },
        grey: {
            100: "#f5f5f5",
            200: "#e9e9e9",
            300: "#d9d9d9",
            400: "#c4c4c4",
            500: "#949494",
            600: "#9a9a9a",
            700: "#717171",
            800: "#5d5d5d",
            900: "#3f3f3f",
            1000: "#1e1e1e"
        },
        info:{
            main: '#3F3F3F'
        },
        text: {
            primary: "#212121",
            secondary: "#3F3F3F",
            dark: "#1E1E1E",
            white: "#fff",
            hint: "#016e04",
            disabled: "#3F3F3F"
        },
        background: {
            paper: "#ffffff",
            default: "#fdfdfd",
            disabled: '#EEEEEE'
        }
    };
}
