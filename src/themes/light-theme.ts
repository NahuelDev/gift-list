import { createTheme } from "@mui/material";

const primary = {
    main: "#4a148c",
};
const secondary = {
    main: "#fff",
};

const status = {
    error: "#ff1744",
};

const background = {
    default: "#e0e0e0",
};

export const lightTheme = createTheme({

    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
        },
        MuiIconButton: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    color: primary.main
                },
            },
        },
    },

    palette: {
        background: {
            default: background.default
        },
        error: {
            main: status.error
        },
        mode: "light",
        primary: {
            main: primary.main
        },
        secondary: {
            main: secondary.main
        },
    },
    
});
