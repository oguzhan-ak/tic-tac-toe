import React from "react";
import "./header.css";

const Header = (props: any) => {
  return (
    <>
      {!props.isFinish && parseInt(props.round) < 9 && (
        <div className="header">
          <h1>Round {props.round}</h1>
          <h1>Turn of {props.person === 0 ? "X" : "O"}</h1>
          <button onClick={props.playAgain} className="buttonRestart">
            Restart
          </button>
        </div>
      )}
      {props.round === 9 && !props.isFinish && (
        <div className="header">
          <h1>No winner!</h1>
          <button className="buttonPlayAgain">Play Again</button>
        </div>
      )}
      {props.isFinish && (
        <div className="header">
          <h1>Winner is {props.winner === 0 ? "X" : "O"}</h1>
          <button onClick={props.playAgain} className="buttonPlayAgain">
            Play Again
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
