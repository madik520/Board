import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




const NewBoard = ({ id, title }) => {
    return(
        <Link id={id} to={`/b/${id}`}>
            <div className="newBoard">
                <h1>{title}</h1>
            </div>
        </Link>
    )
};

NewBoard.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    title: PropTypes.string,
};

export default NewBoard;