import { Person } from "../../interfaces";
import { PersonCard } from "./PersonCard";

interface Props {
    persons: Person[];
}

export const PersonList = ({ persons }: Props) => {
    return (
        <>
            {persons.map((person) => (
                <PersonCard key={person.id} person={person} />
            ))}
        </>
    );
};
