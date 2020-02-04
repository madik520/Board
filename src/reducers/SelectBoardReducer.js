import {SELECT_BOARD, SELECT_BOARD_SUCCESS, OPEN_LIST, CLOSE_LIST} from '../actions/ActionType';

const initialState = {
    title: null,
    id: null,
    isFetching: false,
    isEditingList: false,
}

const activeBoard = (state = initialState, { type, payload }) => {
    switch(type){
        case SELECT_BOARD:
            return {
                ...state,
                title: payload.title,
                id: payload.id,
                isFetching: true,
            }
        case SELECT_BOARD_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case OPEN_LIST:
            return {
                ...state,
                isEditingList: payload
            }
        case CLOSE_LIST:
            return {
                ...state,
                isEditingList: payload
            }
        default:
            return {
                ...state
            };
    }
};

export default activeBoard;