import { useContext } from "react";

import {
    ListItem,
    TextField,
    IconButton,
    InputAdornment,
    Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { Gift } from "../../interfaces";
import { PersonsContext } from "../../context";

interface Props {
    gift: Gift;
    idPerson: string;
    isAbleToEdit: boolean;
}

export const GiftCard = ({ gift, idPerson, isAbleToEdit }: Props) => {
    const { deleteGift, changeInputGift } = useContext(PersonsContext);

    const { name, price, id } = gift;

    const handlePrice = ({
        target
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const priceRegex = /^(?=.*[1-9])[0-9]*[.]?[0-9]{1,2}$/;
        if (!priceRegex.test(target.value) && target.value !== "") return;

        changeInputGift(idPerson, id, target);
    };

    return (
        <ListItem
            sx={{
                display: "flex",
                flexWrap: ["wrap", "wrap", "nowrap"],
                gap: 1,
                justifyContent: "space-between",
                px: 0
            }}
            divider
        >
            {isAbleToEdit ? (
                <>
                    <TextField
                        sx={{
                            mb: [2, 2, "auto"],
                            width: ["100%", "100%", "auto"]
                        }}
                        name="name"
                        disabled={!isAbleToEdit}
                        label="Gift name"
                        placeholder="Flowers.."
                        type="text"
                        value={name}
                        onChange={(e) =>
                            changeInputGift(idPerson, id, e.target)
                        }
                    />
                    <TextField
                        name="price"
                        label="Gift price"
                        disabled={!isAbleToEdit}
                        placeholder="23.12"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            ),
                            type: "number"
                        }}
                        sx={{ width: ["100%", "100%", "15ch"] }}
                        type="text"
                        value={price}
                        onChange={handlePrice}
                    />
                    <IconButton
                        onClick={() => deleteGift(idPerson, id)}
                        aria-label="Delete Gift"
                        disabled={!isAbleToEdit}
                        sx={{
                            width: ["100%", "100%", null]
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </>
            ) : (
                <>
                    <Typography
                        sx={{
                            flex: "0 0 55%",
                            overflow: "hidden",
                            width: "55%"
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        sx={{
                            flex: "0 0 40%",
                            textAlign: "left",
                            width: "40%"
                        }}
                    >
                        $ {price}
                    </Typography>
                </>
            )}
        </ListItem>
    );
};
