import React, { useEffect } from 'react';
import '../style/scss/active-board-wrapper.scss';
import { connect } from 'react-redux';
import { selectBoard } from '../actions/SelecteBoard';
import PropTypes from 'prop-types';
//Components
import ListWrapper from './lists/ListWrapper';

const BoardsLinkWrapper = ({ activeBoard, selectBoard, match }) => {

    useEffect(() => {
        selectBoard(match.params.id)
    }, [match.params.id, selectBoard])

    const getTitle = () => {
        return activeBoard.title
    }
    if(activeBoard.isFetching){
        return (<h1>Loading...</h1>)
    }

    return(
        <div className="active-board-wrapper">
           <div className="active-board-title">{getTitle()}</div>
           <ListWrapper />
        </div>
    )
};

BoardsLinkWrapper.propTypes = {
    activeBoard: PropTypes.object,
    selectBoard: PropTypes.func
}

export default connect(({ activeBoard }) => ({ 
    activeBoard,
}), { selectBoard })(BoardsLinkWrapper);