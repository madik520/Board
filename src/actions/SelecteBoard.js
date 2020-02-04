import {SELECT_BOARD, SELECT_BOARD_SUCCESS} from './ActionType';
import find from 'lodash/find';
import Store from '../store/store';


export const selectBoard = (id) => dispatch => {
    const boardsCollection = Store.getState().boardsCollection;
    const activeBoard = find(boardsCollection, item => item.id === +id)

    dispatch({ type: SELECT_BOARD, payload: activeBoard });
    dispatch({ type: SELECT_BOARD_SUCCESS });
};