import {
    differenceInDays,
    differenceInYears,
    setYear,
    getYear,
    isSameDay
} from "date-fns";

export const daysLeftUntilBirthday = (dateOfBirth: number): number => {
    let daysLeft: number;
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const birthdayDate = setYear(dateOfBirth, getYear(today));
    if (today < birthdayDate) {
        daysLeft = differenceInDays(birthdayDate, today);
    } else {
        daysLeft = differenceInDays(
            setYear(birthdayDate, getYear(today) + 1),
            today
        );
    }
    return daysLeft;
};

export const howMuchTurns = (dateOfBirth: number): number => {
    return differenceInYears(new Date(), dateOfBirth) + 1;
};

export const isDefaultBirthdate = (dateOfBirth: number): boolean => {
    return isSameDay(dateOfBirth, new Date().getTime());
};

export const dateOfBirthFormat = (dateOfBirth: number): string => {
    return new Date(dateOfBirth).toLocaleDateString("en-GB");
};
