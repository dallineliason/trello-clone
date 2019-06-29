import React from 'react';

const BoardCard = (props) => {
    const { title } = props;
    return (
        <div className="board-card">
            <h2 className='board-card__title'>{title}</h2>
        </div>
    )
}

export default BoardCard;