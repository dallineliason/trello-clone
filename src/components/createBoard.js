import React, { useState, useEffect } from 'react';


const CreateBoard = (props) => {
    const { setCreate, setBoards, boards } = props;
    const [titleValue, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        
        setBoards([
            ...boards,
            { title: titleValue }
        ])
    }

    useEffect(() => {
        localStorage.setItem('boards', JSON.stringify(boards))
    })

    return (
        <div className='create-board'>
            <div className='create-board__wrapper'>
            <div><h4>What shall we call the board?</h4></div>
            <form onSubmit={handleSubmit} className='create-board__form'>
                <input 
                className='create-board__input'
                onChange={(e) => setValue(e.target.value)}
                type='text'
                name='title'
                placeholder='Title...'
                value={titleValue}
                 />
                 <button className='create-board__button' type='submit'>Create</button>
                 <button onClick={() => setCreate(false)} className='create-board__cancel'>Cancel</button>
            </form>
            </div>
        </div>
    )
}

export default CreateBoard;