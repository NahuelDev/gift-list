import { Person } from "../interfaces";

export type value = 
    | Person[]
    | "light"
    | "dark"
    | null;

export type key = 
    | "persons"
    | "theme";