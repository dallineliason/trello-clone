import React, { useState } from "react";
import BoardCard from "./boardCard";
import CreateBoard from "./createBoard";

const Boards = () => {
  const  boardsData = JSON.parse(localStorage.getItem('boards'))
  const [boards, setBoards] = useState(boardsData || [])
  const [isCreating, setCreate] = useState(false);

  return (
    <div className="boards">
      {isCreating ? (
        <CreateBoard setBoards={setBoards} setCreate={setCreate} boards={boards}/>
      ) : (
        <div className="boards__create" onClick={() => setCreate(true)}>
          <h2 className="boards__create-title">Create a new board...</h2>
        </div>
      )}

      { boards.length > 0 ? boards.map((board, index) => {
        return <BoardCard id={board.title} title={board.title} />
    }) : null} 
    </div>
  );
};

export default Boards;
