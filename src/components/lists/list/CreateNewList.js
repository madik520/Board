import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createNewList } from '../../../actions/CreatingLists';
import { closeList } from '../../../actions/CloseList';



const CreateNewList = ({ onClick, createNewList, closeList }) => {
    const [text, setText] = useState("");

    const getName = ({ target: { value } }) => {
        setText(value);
    };

    const submitName = ({ key }) => {
        if(key === "Enter"){
            createNewList(text);
            closeList();
        }
    }

    return(
        <div className="open-list-block">
            <div className="open-list-container">
                <svg onClick={onClick}></svg>
                <input onKeyPress={submitName} onChange={getName} value={text} type="text" placeholder="Create list" />
                <p>give me a name.</p>
            </div>
        </div>
    );
};

CreateNewList.propTypes = {
    onClick: PropTypes.func,
    createNewList: PropTypes.func,
    closeList: PropTypes.func
}


export default connect(null, { createNewList, closeList })(CreateNewList);