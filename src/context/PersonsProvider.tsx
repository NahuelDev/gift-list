import { useEffect, useState } from "react";

import { PersonsContext, PropsChangeInput } from ".";
import { Person, Gift } from "../interfaces";
import { getLocalStorage, setLocalStorage } from "../utils";

interface PropsChangePerson {
    children: React.ReactNode;
}

export const PersonsProvider = ({ children }: PropsChangePerson) => {
    const initialState: Person[] = getLocalStorage("persons");

    const [persons, setPersons] = useState<Person[]>(initialState);

    useEffect(() => {
        setLocalStorage("persons", persons);
    }, [persons]);

    const addNewPersonBirthday = () => {
        const newPerson: Person = {
            dateOfBirth: new Date().getTime(),
            gifts: [],
            id: crypto.randomUUID(),
            name: ""
        };

        setPersons([...persons, newPerson]);
    };

    const handleDeletePerson = (id: string) => {
        setPersons((prevPersons) => {
            const newPersons = [...prevPersons].filter(
                (person) => id !== person.id
            );
            return newPersons;
        });
    };

    const handleChangePerson = (
        id: string,
        { name, value }: PropsChangeInput
    ) => {
        const newValue = { [name]: value };

        setPersons((prevPersons) => {
            const newPersons = [...prevPersons].map((person) =>
                person.id === id ? { ...person, ...newValue } : person
            );
            return newPersons;
        });
    };

    const handleChangePersonBirthDate = (id: string, date: number) => {
        if (!date) return;

        setPersons((prevPersons) => {
            const newPersons = [...prevPersons].map((person) =>
                person.id === id ? { ...person, dateOfBirth: date } : person
            );
            return newPersons;
        });
    };

    const addNewGift = (gifts: Gift[], idPerson: string) => {
        const newGift: Gift = {
            id: crypto.randomUUID(),
            name: "",
            price: ""
        };

        const newGifts = [...gifts, newGift];

        setPersons((prevPersons) => {
            const newPersons = [...prevPersons].map((person) =>
                person.id === idPerson ? { ...person, gifts: newGifts } : person
            );
            return newPersons;
        });
    };

    const deleteGiftsEmpty = (idPerson: string) => {
        setPersons((prevPersons) => {
            const newPersons = [...prevPersons].map((person) => {
                if (person.id === idPerson) {
                    const newGifts = person.gifts.filter((gift) => gift.name);
                    return { ...person, gifts: newGifts };
                }
                return person;
            });

            return newPersons;
        });
    };

    const deleteAllGifts = (idPerson: string) => {
        setPersons((prevPersons) => {
            const newPersons = [...prevPersons].map((person) =>
                person.id === idPerson ? { ...person, gifts: [] } : person
            );
            return newPersons;
        });
    };

    const deleteGift = (idPerson: string, idGift: string) => {
        setPersons((prevPersons) => {
            const newPersons = [...prevPersons].map((person) => {
                if (person.id === idPerson) {
                    const newGifts = person.gifts.filter(
                        (gift) => gift.id !== idGift
                    );
                    return { ...person, gifts: newGifts };
                }
                return person;
            });

            return newPersons;
        });
    };

    const changeInputGift = (
        idPerson: string,
        idGift: string,
        { name, value }: PropsChangeInput
    ) => {
        const newValue = { [name]: value };

        setPersons((prevPersons) => {
            const newPersons = [...prevPersons].map((person) => {
                if (person.id === idPerson) {
                    const newGifts = person.gifts.map((gift) =>
                        gift.id === idGift ? { ...gift, ...newValue } : gift
                    );
                    return { ...person, gifts: newGifts };
                }
                return person;
            });
            return newPersons;
        });
    };

    return (
        <PersonsContext.Provider
            value={{
                addNewGift,
                addNewPersonBirthday,
                changeInputGift,
                deleteAllGifts,
                deleteGift,
                deleteGiftsEmpty,
                handleChangePerson,
                handleChangePersonBirthDate,
                handleDeletePerson,
                persons
            }}
        >
            {children}
        </PersonsContext.Provider>
    );
};
