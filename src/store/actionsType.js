import { INSERT_CATEGORIES, INSERT_USER } from "./actions";

export const insertUser = (payload) => ({
    type: INSERT_USER,
    payload: payload
})

export const insertCategories = (payload) => ({
    type: INSERT_CATEGORIES,
    payload: payload
})