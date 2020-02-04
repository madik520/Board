import { ARCHIVE_POST } from './ActionType';

export const archiveCard = (cardId, listId) => dispatch => {
    dispatch({ type: ARCHIVE_POST, payload: { cardId, listId } });
}