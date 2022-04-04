import { ADD_TO_WATCHLATER } from "./action-types"

export const watchlaterReducer = (state, { type, payload }) => {
    switch(type) {
        case ADD_TO_WATCHLATER: {
            console.log(payload)
        }

    }
}