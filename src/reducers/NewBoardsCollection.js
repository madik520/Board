import { STORE_NEW_BOARD_TO_COLLECTION } from '../actions/ActionType';

const initialState = [];

const generateBoard = (state = initialState, { type, payload }) => {
    switch (type) {
        case STORE_NEW_BOARD_TO_COLLECTION:
            return [...state, payload]

        default:
            return state;

    }
};

export default generateBoard;