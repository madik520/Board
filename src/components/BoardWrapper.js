import React, { useState } from 'react';
import '../style/scss/board-wrapper.scss';
import { connect } from 'react-redux';
import { openBoard, closeBoard, submitNewBoard } from '../actions/ActionCreateBoard';
import PropTypes from 'prop-types';

//Components
import CreateBoard from './board/CreateBoard/CreateBoard';
import ActiveCreateBoard from './board/ActiveBoard/ActiveBoard';
import NewBoard from './board/newBoard/newBoard';


const BoardWrapper = ({ newBoard, openBoard, closeBoard, submitNewBoard, boardsCollection }) => {
    const [text, setText] = useState("");

    const getValues = ({ target: { value, id } }) => {
        setText(value);
        const getID = document.getElementById(id);
        if(value.length === 1 || value.length < 3){
            getID.style.cssText= "border: 3px solid red";
        }else{
            getID.style.cssText= "border: 3px solid lightgreen";
        }
    }
    const cancelRed = ({ target: { id } }) => {
        const getID = document.getElementById(id);
        getID.style.cssText= "border: none";
    }

    const handleClickRenderNewBoard = () => {
        if(text.length > 2){
        submitNewBoard(text);
        setText("");
        closeBoard();
        }
    }

    const handlePressRenderNewBoard = ({ key }) => {
        if(key === "Enter" && text.length > 2){
        submitNewBoard(text);
        setText("");
        closeBoard();
        }
    }

    return(
        <div className="board-wrapper">
        { newBoard.isBoardOpen ? <ActiveCreateBoard onBlur={cancelRed} onKeyPress={handlePressRenderNewBoard} onChange={getValues} defaultValue={text} onClick={handleClickRenderNewBoard} closeBoard={closeBoard} /> : <CreateBoard onClick={openBoard} />}
        { boardsCollection.map(({ id, title }) => {
            return <NewBoard key={id} id={id} title={title} />
        }) }
        </div>
    ) 
};

BoardWrapper.propType = {
    newBoard: PropTypes.object,
    boardsCollection: PropTypes.array,
    openBoard: PropTypes.func.isRequired,
    closeBoard: PropTypes.func.isRequired,
    submitNewBoard: PropTypes.func.isRequired,
}

export default connect(({ newBoard, boardsCollection }) => ({
    newBoard,
    boardsCollection
}), { openBoard, closeBoard, submitNewBoard })(BoardWrapper);