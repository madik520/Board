import React, { useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitTask } from '../../../actions/CreatingLists';


const NewList = ({ id, name,  submitTask, children }) => {
    const [text, setText] = useState("");

    const getValue = ({ target: { value } }) => {
        setText(value);
    }

    const addTask = ({ key }) => {
        if(key === "Enter" && text.length > 2){
            submitTask(text, (new Date().getTime()), id);
            setText("");
        }
    }

    return(
        <div>
            <div id={id} className="new-list-block">
                <h2>{name}</h2>
                <input onKeyPress={addTask} onChange={getValue} value={text} type="text" placeholder="add task..." />
                { children }
            </div>
        </div>
    )
};

NewList.propTypes = {
    submitTask: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
}


export default connect(null, { submitTask })(NewList);