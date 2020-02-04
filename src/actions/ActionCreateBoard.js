import { OPEN_BOARD, CLOSE_BOARD, SUBMIT_BOARD, STORE_NEW_BOARD_TO_COLLECTION } from './ActionType';
import store from '../store/store';


export const openBoard = () => ({
    type: OPEN_BOARD,
    payload: true
});

export const closeBoard = () => ({
    type: CLOSE_BOARD,
    payload: false
});

export const submitNewBoard = (title) => {
    return dispatch => {
        dispatch({ type: SUBMIT_BOARD, payload: title });

        const newBoard = {
            id: store.getState().newBoard.id,
            title: store.getState().newBoard.title
        }

        dispatch({ type: STORE_NEW_BOARD_TO_COLLECTION, payload: newBoard });
    }
}