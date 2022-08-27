import { Grid, Typography } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export const NoPersons = () => {
    return (
        <Grid
            item
            xs={12}
            sx={{
                alignItems: "center",
                display: "flex",
                height: "calc(100vh - 64px)",
                justifyContent: "center"
            }}
        >
            <Typography variant="h1" align="center">
                No People <SentimentDissatisfiedIcon fontSize="inherit" />
            </Typography>
        </Grid>
    );
};
