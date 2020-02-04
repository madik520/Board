import React from 'react';
import "../../../style/scss/board-wrapper.scss";
import PropTypes from 'prop-types';


const ActiveCreateBoard = ({ defaultValue, closeBoard, onClick, onChange, onKeyPress, onBlur }) => {
    return(
        <div className="active-create-board">
            <div className="board-title">
                <h1>Creating a board</h1>
                <svg onClick={() => closeBoard()} className="icon-exit"></svg>
            </div>
            <div className="board-main">
                <p>What shall we call the board?</p>
                <input id="inputean" onBlur={onBlur} onKeyPress={onKeyPress}  onChange={onChange} type="text" defaultValue={defaultValue} />
            </div>
            <div className="board-footer">
                <button onClick={() => closeBoard()}>cancel</button>
                <button onClick={onClick}>create</button>
            </div>
        </div>
    )
};

ActiveCreateBoard.propTypes = {
    defaultValue: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    onBlur: PropTypes.func,
    closeBoard: PropTypes.func,
}

ActiveCreateBoard.defaultProps = {
    defaultValue: "",
    onClick: () => {},
    onChange: () => {},
    onKeyPress: () => {},
    onBlur: () => {},
    closeBoard: () => {}
}



export default ActiveCreateBoard;