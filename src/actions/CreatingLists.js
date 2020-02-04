import { CREATE_NEW_LIST, SUBMIT_TASK } from './ActionType';



export const createNewList = (name) => dispatch => {
    dispatch({type: CREATE_NEW_LIST, payload: name})
};


export const submitTask = (cardName, cardId, listId) => dispatch => {
    dispatch({ type: SUBMIT_TASK, payload: { cardName, listId, cardId } })
};