import React from 'react';
import { connect } from 'react-redux';
import { openList } from '../../actions/OpenList';
import { closeList } from '../../actions/CloseList';
import PropTypes from 'prop-types';

//Components
import NewList from './list/NewList';
import CreateNewList from './list/CreateNewList';
import AddList from './list/AddList';
import Card from './card/card';


const ListWrapper = ({ activeBoard, openList, closeList, activeBoardData  }) => {

    const handleOpenList = () => {
        openList();
    }

    const handleCloseList = () => {
        closeList();
    }
    const BoardData = Object.values(activeBoardData.listItems);
    return(
        <div className="list-wrapper">
            {BoardData.map(({ name, id, cards }) => {
                return <NewList key={id} id={id} name={name} >
                    <Card items={cards} />
                </NewList>
            })}
            {activeBoard.isEditingList ? <CreateNewList onClick={handleCloseList} /> : <AddList onClick={handleOpenList} />}
        </div>
    )
};

ListWrapper.propTypes = {
    activeBoard: PropTypes.object,
    activeBoardData: PropTypes.object,
    openList: PropTypes.func.isRequired,
    closeList: PropTypes.func.isRequired,
}

export default connect(({ activeBoard, activeBoardData  }) => ({
    activeBoard,
    activeBoardData
}), { openList, closeList })(ListWrapper);