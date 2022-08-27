import { createContext } from "react";

import { Person, Gift } from "../interfaces";

export interface PropsChangeInput {
    name: string;
    value: string;
}

interface ContextProps {
    persons: Person[];
    addNewGift: (gifts: Gift[], idPerson: string) => void;
    addNewPersonBirthday: () => void;
    changeInputGift: (
        idPerson: string,
        idGift: string,
        { name, value }: PropsChangeInput
    ) => void;
    deleteAllGifts: (idPerson: string) => void;
    deleteGift: (idPerson: string, idGift: string) => void;
    deleteGiftsEmpty: (idPerson: string) => void;
    handleChangePerson: (id: string, { name, value }: PropsChangeInput) => void;
    handleChangePersonBirthDate: (id: string, date: number) => void;
    handleDeletePerson: (id: string) => void;
}

export const PersonsContext = createContext({} as ContextProps);
