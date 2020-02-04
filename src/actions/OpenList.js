import { OPEN_LIST } from './ActionType';


export const openList = () => dispatch => {
    dispatch({ type: OPEN_LIST, payload: true })
};