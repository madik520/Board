import React from 'react';
import "../../../style/scss/board-wrapper.scss";
import PropTypes from 'prop-types';


const CreateBoard = ({ onClick }) => {
    return(
        <div className="create-board" onClick={onClick}>
            <h1>Create a board</h1>
        </div>
    )
};

CreateBoard.propTypes = {
    onClick: PropTypes.func.isRequired
}

CreateBoard.defaultProps = {
    onClick: () => {}
}


export default CreateBoard;