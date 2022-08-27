import { useContext, useState } from "react";

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
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";

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
    const { name, dateOfBirth, id, gifts } = person;

    //If it is a new person will be editable, if already has name then no.
    const initialValueAbleToEdit = !name;

    const [isAbleToEdit, setIsAbleToEdit] = useState(initialValueAbleToEdit);

    const {
        handleDeletePerson,
        handleChangePerson,
        handleChangePersonBirthDate
    } = useContext(PersonsContext);

    const { palette } = useTheme();

    const handleBirthDateChange = (date: number | null) => {
        if (!date) return;

        handleChangePersonBirthDate(id, date);
    };

    const handleEditCard = () => {
        setIsAbleToEdit(!isAbleToEdit);
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
                            disabled={!isAbleToEdit}
                        />
                    }
                    action={
                        <>
                            <IconButton onClick={handleEditCard}>
                                {isAbleToEdit ? (
                                    <SaveIcon aria-label="Save" />
                                ) : (
                                    <EditIcon aria-label="Edit" />
                                )}
                            </IconButton>
                            <IconButton onClick={() => handleDeletePerson(id)}>
                                <CloseIcon aria-label="Delete Person" />
                            </IconButton>
                        </>
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
                            disabled={!isAbleToEdit}
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
                                            color: isAbleToEdit
                                                ? palette.primary.main
                                                : palette.text.disabled
                                        }
                                    }}
                                />
                            )}
                        />
                    </Box>
                    <GiftGrid
                        gifts={gifts}
                        idPerson={id}
                        isAbleToEdit={isAbleToEdit}
                    />
                </CardContent>
            </Card>
        </Box>
    );
};
