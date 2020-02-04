import { CREATE_NEW_LIST, SUBMIT_TASK, SELECT_BOARD, ARCHIVE_POST} from '../actions/ActionType';
import uniqueId from 'lodash/uniqueId';
import { combineReducers } from 'redux';


const ListReducer = (state = {}, { type, payload }) => {
    const listId = uniqueId("list_");

    switch(type){
        case SELECT_BOARD:
            return payload.data || []
        case CREATE_NEW_LIST:
            return {
                ...state,
                [listId]: {
                    name: payload,
                    id: listId,
                    cards: []
                }
            }
        case SUBMIT_TASK: {
            const { listId, cardName, cardId } = payload;
            const currentList = state[listId];
            currentList.cards.push({ name: cardName, cardId, listId, isArchived: false })
            return {
                ...state,
                [listId]: currentList,
            }
        }
        case ARCHIVE_POST: {
            const { cardId, listId } = payload;
            const currentList = state[listId];
            const findCard = currentList.cards.find(card => card.cardId === cardId);

            if (findCard.isArchived === false) {
                findCard.isArchived = true;
            } else {
                findCard.isArchived = false;
            }

            return {
                ...state,
                [listId]: currentList
            }
        }
        default:
            return state;
    }
};

const ActiveBoardReducer  = combineReducers({
    listItems: ListReducer,
})

export default ActiveBoardReducer;