export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("boardsCollection");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = boards => {
    try {
      boards.boardsCollection.map((board) => {
        return board.id === boards.activeBoard.id ?
          board.data = boards.activeBoardData.listItems : null
      })
        const serializeActiveBoardState = JSON.stringify(boards)
        localStorage.setItem('boardsCollection', serializeActiveBoardState);
    } catch (err) {
        new Error(err);
    }
}