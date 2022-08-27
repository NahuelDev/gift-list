import { useContext } from "react";

import {
    Box,
    Card,
    CardHeader,
    TextField,
    IconButton,
    Typography,
    CardContent,
    useTheme
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CloseIcon from "@mui/icons-material/Close";

import { PersonsContext } from "../../context";
import { Person } from "../../interfaces";
import { GiftGrid } from "./GiftGrid";
import {
    daysLeftUntilBirthday,
    howMuchTurns,
    isDefaultBirthdate
} from "../../utils";

interface Props {
    person: Person;
}

export const PersonCard = ({ person }: Props) => {
    const {
        handleDeletePerson,
        handleChangePerson,
        handleChangePersonBirthDate
    } = useContext(PersonsContext);

    const { palette } = useTheme();

    const { name, dateOfBirth, id, gifts } = person;

    const handleBirthDateChange = (date: number | null) => {
        if (!date) return;

        handleChangePersonBirthDate(id, date);
    };

    return (
        <Box>
            <Card variant="elevation">
                <CardHeader
                    title={
                        <TextField
                            autoFocus
                            variant="standard"
                            color="secondary"
                            fullWidth
                            value={name}
                            name={"name"}
                            onChange={(e) => handleChangePerson(id, e.target)}
                            placeholder={"John doe.."}
                        />
                    }
                    action={
                        <IconButton
                            onClick={() => handleDeletePerson(id)}
                            aria-label="Delete Person"
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                    sx={{
                        backgroundColor: "secondary"
                    }}
                />
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}
                >
                    <Box
                        sx={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: ["column", "column", "row-reverse"],
                            gap: "16px",
                            justifyContent: "center",
                            padding: 0
                        }}
                    >
                        {!isDefaultBirthdate(dateOfBirth) && (
                            <Typography align="center" variant="subtitle2">
                                {`Turns ${howMuchTurns(
                                    dateOfBirth
                                )} years old in ${daysLeftUntilBirthday(
                                    dateOfBirth
                                )} days`}
                            </Typography>
                        )}

                        <DatePicker
                            disableFuture
                            value={dateOfBirth}
                            onChange={(value) =>
                                handleBirthDateChange(Number(value))
                            }
                            inputFormat="dd/MM/yyyy"
                            label="Date of birth"
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    sx={{
                                        svg: {
                                            color: palette.primary.main
                                        }
                                    }}
                                />
                            )}
                        />
                    </Box>
                    <GiftGrid gifts={gifts} idPerson={id} />
                </CardContent>
            </Card>
        </Box>
    );
};
