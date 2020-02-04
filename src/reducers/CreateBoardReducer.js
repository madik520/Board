import { OPEN_BOARD, CLOSE_BOARD, SUBMIT_BOARD } from '../actions/ActionType';


const initial = {
    isBoardOpen: false,
    title: null,
    id: null
}

const newBoard = (state = initial, { type, payload }) => {
    switch(type){
        case OPEN_BOARD:
            return {
                ...state,
                isBoardOpen: true,
                title: null,
                id: null
            }
        case CLOSE_BOARD:
            return {
                ...state,
                isBoardOpen: false,
                title: null,
                id: null
            }
        case SUBMIT_BOARD:
            return {
                ...state,
                isBoardOpen: false,
                title: payload,
                id: (new Date().getTime())
            }
        default:
            return state;
    }
}

export default newBoard;