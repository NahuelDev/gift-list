import { useContext } from "react";

import { Box, List, Typography, IconButton, Collapse } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { Gift } from "../../interfaces";
import { GiftCard } from ".";
import { PersonsContext } from "../../context";

interface Props {
    gifts: Gift[];
    idPerson: string;
}

export const GiftGrid = ({ gifts, idPerson }: Props) => {
    const { addNewGift, deleteAllGifts } = useContext(PersonsContext);
    const areGifts = Boolean(gifts.length);

    return (
        <Box>
            <Box
                sx={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1
                }}
            >
                <Typography
                    variant="subtitle2"
                    sx={{
                        width: "100%"
                    }}
                >
                    Gifts
                </Typography>
                {areGifts && (
                    <IconButton
                        onClick={() => deleteAllGifts(idPerson)}
                        aria-label="Delete all the gifts"
                    >
                        <DeleteForeverIcon />
                    </IconButton>
                )}
                <IconButton
                    onClick={() => addNewGift(gifts, idPerson)}
                    aria-label="Add Gift"
                >
                    <AddIcon />
                </IconButton>
            </Box>
            <List>
                <TransitionGroup>
                    {areGifts &&
                        gifts.map((gift) => (
                            <Collapse key={gift.id}>
                                <GiftCard gift={gift} idPerson={idPerson} />
                            </Collapse>
                        ))}
                </TransitionGroup>
            </List>
        </Box>
    );
};
