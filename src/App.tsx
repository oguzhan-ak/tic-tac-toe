import React, { useState } from "react";
import "./App.css";
import BigBox from "./components/bigBox/bigBox";
import Header from "./components/header/header";

function App() {
  const [person, setPerson] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [round, setRound] = useState(0);
  const [winner, setWinner] = useState(0);

  const [table, setTable] = useState(["", "", "", "", "", "", "", "", ""]);
  const winningCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkIsFinish = () => {
    console.log(table);
    winningCases.forEach((indexes: number[]) => {
      if (
        table[indexes[0]] === "X" &&
        table[indexes[1]] === "X" &&
        table[indexes[2]] === "X"
      ) {
        setWinner(0);
        setIsFinish(true);
      }
      if (
        table[indexes[0]] === "O" &&
        table[indexes[1]] === "O" &&
        table[indexes[2]] === "O"
      ) {
        setWinner(1);
        setIsFinish(true);
      }
    });
  };

  const playAgain = () => {
    setPerson(0);
    setIsFinish(false);
    setRound(0);
    setWinner(0);
    setTable(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <>
      <Header
        playAgain={playAgain}
        winner={winner}
        round={round}
        isFinish={isFinish}
        person={person}
      />
      <BigBox
        checkIsFinish={checkIsFinish}
        table={table}
        setTable={setTable}
        setWinner={setWinner}
        round={round}
        setRound={setRound}
        isFinish={isFinish}
        setIsFinish={setIsFinish}
        person={person}
        setPerson={setPerson}
      />
    </>
  );
}

export default App;
