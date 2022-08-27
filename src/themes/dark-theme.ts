import { createTheme } from "@mui/material";

const primary = {
    main: "#568C14",
};
const secondary = {
    main: "#fff",
};

const status = {
    error: "#ff1744",
};

const background = {
    default: "#000",
};

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
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
