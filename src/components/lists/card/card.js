import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { archiveCard } from '../../../actions/Arhive';


const Card = ({ items, archiveCard }) => {
    return (
        <ul className="card-list" >
                { items.map(({ cardId, listId, name, isArchived }) => {
                return <li className={isArchived ? "card-item-through" : "card-item" } key={cardId} id={cardId}>
                        <p>{name}</p>
                        <div onClick={() => archiveCard(cardId, listId)}><i className="fas fa-check"></i></div>
                    </li>
            }) }
        </ul>
    )
};

Card.propTypes = {
    items: PropTypes.array.isRequired,
    archiveCard: PropTypes.func

}

Card.defaultProps = {
    items: [],
    archiveCard: () => {}
}


export default connect(({ activeBoardData }) => ({activeBoardData}), { archiveCard })(Card);