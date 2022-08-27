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
    palette: {
        mode: "light",
        background: {
            default: background.default,
        },
        primary: {
            main: primary.main,
        },
        secondary: {
            main: secondary.main,
        },
        error: {
            main: status.error,
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
        },
        MuiIconButton: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    color: primary.main,
                },
            },
        },
    },
});
