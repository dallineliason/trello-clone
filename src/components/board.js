import React, { useState } from "react";
import BoardList from "./boardList";

const Board = ({ match }) => {
  const id = match.params.id;
  const [listActive, setList] = useState(false);
  const listsData = JSON.parse(localStorage.getItem('lists'))
  const currentBoard = listsData.filter(list => list.currentBoard === id)
  const [lists, setLists] = useState(listsData || [])

  return (
    <div className="board">
      <div className="board__title">
        <h2 className="board__title-text">{id}</h2>
      </div>

      {listActive ? (
          listsData.map(list => {
                return (
                    <BoardList 
                    currentBoard={currentBoard} 
                    title={list.title} 
                    setLists={setLists} 
                    lists={lists}
                    />
                    )          
          })
      ) : (
        <div className="board__add-list" onClick={() => setList(true)}>
          <h5 className="board__add-list-title">Add a list...</h5>
        </div>
      )}
    </div>
  );
};

export default Board;
