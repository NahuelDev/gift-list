export interface Gift {
    id: string;
    name: string;
    price: string;
}

export interface Person {
    id: string;
    name: string;
    dateOfBirth: number;
    gifts: Gift[];
}

export interface Persons {
    persons: Person[];
}