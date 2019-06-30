import React, { useState } from "react";
import BoardCard from "./boardCard";
import CreateBoard from "./createBoard";

const Boards = () => {
  const [isCreating, setCreate] = useState(false);

  return (
    <div className="boards">
      {isCreating ? (
        <CreateBoard setCreate={setCreate}/>
      ) : (
        <div className="boards__create" onClick={() => setCreate(true)}>
          <h2 className="boards__create-title">Create a new board...</h2>
        </div>
      )}

      <BoardCard title="Board 1" />
      <BoardCard title="Board 2" />
      <BoardCard title="Board 3" />
      <BoardCard title="Board 4" />
      <BoardCard title="Board 5" />
      <BoardCard title="Board 6" />
    </div>
  );
};

export default Boards;
