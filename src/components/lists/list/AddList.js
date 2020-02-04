import React from 'react';
import PropTypes from 'prop-types';

const AddList = ({ onClick }) => {
    return (
        <div className="add-list" onClick={onClick}>
            Add a list...
        </div>
    )
};

AddList.propTypes = {
    onClick: PropTypes.func.isRequired
}

AddList.defaultProps = {
    onClick: () => {}
}

export default AddList;