import { Person } from "../interfaces";
import { key, value } from "../types";

export const setLocalStorage = (key: key, value: value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

//Overload
export function getLocalStorage(key: "persons"): Person[];
export function getLocalStorage(key: "theme"): "dark" | "light" | null;

export function getLocalStorage (key: key): value {
    const value = localStorage.getItem(key);

    switch (key) {
    case "persons":{
        const res : Person[] = value ? JSON.parse(value).filter((person: Person) => person.name) : [];
        return res;
    }

    case "theme":
        return value ? JSON.parse(value) : null;
    default:
        return null;
    }
};
