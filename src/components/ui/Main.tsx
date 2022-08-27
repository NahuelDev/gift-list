import { useContext } from "react";

import { Masonry } from "@mui/lab";

import { PersonsContext } from "../../context";
import { PersonList, NoPersons } from ".";

export const Main = () => {
    const { persons } = useContext(PersonsContext);

    return (
        <Masonry
            spacing={2}
            columns={[1, 2, 2, 3, 4]}
            sx={{
                alignContent: "center",
                m: 0
            }}
        >
            {!persons.length ? <NoPersons /> : <PersonList persons={persons} />}
        </Masonry>
    );
};
