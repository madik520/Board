import { createStore,  applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/combineReducers';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localstorage';

const persistedState = loadState();


const middleware = applyMiddleware(thunk);


const Store =  createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(middleware),
);

Store.subscribe(throttle(() => {
    saveState({
        boardsCollection: Store.getState().boardsCollection,
        newBoard: Store.getState().newBoard,
        activeBoard: Store.getState().activeBoard,
        activeBoardData: Store.getState().activeBoardData,
    })
}, 1000));


export default Store;