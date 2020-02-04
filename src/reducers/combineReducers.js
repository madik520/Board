import { combineReducers } from 'redux';
import newBoard from './CreateBoardReducer';
import generateBoard from './NewBoardsCollection';
import activeBoard from './SelectBoardReducer';
import ActiveBoardReducer  from './ActiveBoardData';

const rootReducer = combineReducers({
    newBoard: newBoard,
    boardsCollection: generateBoard,
    activeBoard: activeBoard,
    activeBoardData: ActiveBoardReducer 
});

export default rootReducer;