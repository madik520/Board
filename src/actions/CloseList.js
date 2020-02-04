import { CLOSE_LIST } from './ActionType';


export const closeList = () => dispatch => {
    dispatch({ type: CLOSE_LIST, payload: false })
};