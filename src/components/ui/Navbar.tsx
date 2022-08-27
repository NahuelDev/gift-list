import { Dispatch, SetStateAction, useContext, useEffect } from "react";

import { AppBar, Box, Button, IconButton, Theme, Toolbar } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { darkTheme, lightTheme } from "../../themes";
import { isLightTheme, saveThemeOnLocalStorage } from "../../utils";
import { PersonsContext } from "../../context";

interface Props {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

export const Navbar = ({ theme, setTheme }: Props) => {
    const { addNewPersonBirthday } = useContext(PersonsContext);

    useEffect(() => {
        saveThemeOnLocalStorage(theme);
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme((prevTheme) =>
            isLightTheme(prevTheme) ? darkTheme : lightTheme
        );
    };

    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                    variant="text"
                    color="secondary"
                    startIcon={<CakeIcon />}
                >
                    Gift List
                </Button>
                <Box>
                    <IconButton
                        onClick={handleChangeTheme}
                        sx={{
                            color: isLightTheme(theme)
                                ? lightTheme.palette.secondary.main
                                : darkTheme.palette.primary.main
                        }}
                    >
                        {isLightTheme(theme) ? (
                            <LightModeIcon />
                        ) : (
                            <DarkModeIcon />
                        )}
                    </IconButton>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={addNewPersonBirthday}
                    >
                        Add new Person
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
