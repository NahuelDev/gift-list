import { useState } from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Main, Navbar } from "./components/ui";
import { PersonsProvider } from "./context";
import { getInitialTheme } from "./utils";

const INITIAL_THEME = getInitialTheme();

function App() {
    const [theme, setTheme] = useState(INITIAL_THEME);

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <PersonsProvider>
                    <CssBaseline />
                    <Navbar theme={theme} setTheme={setTheme} />
                    <Main />
                </PersonsProvider>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

export default App;
