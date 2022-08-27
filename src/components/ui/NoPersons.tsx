import { Grid, Typography } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export const NoPersons = () => {
    return (
        <Grid
            item
            xs={12}
            sx={{
                height: "calc(100vh - 64px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Typography variant="h1" align="center">
                No People <SentimentDissatisfiedIcon fontSize="inherit" />
            </Typography>
        </Grid>
    );
};
