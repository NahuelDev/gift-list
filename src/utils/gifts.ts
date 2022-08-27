import { Gift } from "../interfaces";

export const removeGift = (gifts: Gift[], id: string): Gift[] => {
    return gifts.filter((gift) => gift.id !== id);
};
