import React from 'react';
import history from './history';

const BoardCard = (props) => {
    const { title, id } = props;
    return (
        <div className="board-card" onClick={() => history.push(`/b/${id}`)}>
            <h2 className='board-card__title'>{title}</h2>
        </div>
    )
}

export default BoardCard;