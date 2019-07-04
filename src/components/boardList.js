import React, { useState, useEffect } from 'react';

const BoardList = (props) => {
    const { title, setLists, lists, currentBoard } = props;
    const [listValue, setListValue] = useState("");
    const [cardValue, setCardValue] = useState('')

    const handleListSubmit = (e) => {
        e.preventDefault();
        setLists([
            ...lists,
            { currentBoard, title: listValue }
        ])
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(lists))
    })

    return (
        <div className="board__list">
        <form onSubmit={handleListSubmit} className="board__list-form">
          <input
            className="board__list-form-input"
            onChange={e => setListValue(e.target.value)}
            type="text"
            placeholder="Add a list"
            value={listValue}
          />
        </form>

        <div className='board__list-active'>
            <h4 className='board__list-active-title'>{title}</h4>
            <form>
                <input
                className="board__list-active-form-input"
                onChange={e => setCardValue(e.target.value)}
                type="text"
                placeholder="Add a card"
                value={cardValue}
                />
            </form>
        </div>
      </div>
    )
}

export default BoardList;