import React from "react";
import Box from "../box/box";
import "./bigBox.css";

const BigBox = (props: any) => {
  const numbers = Array.from(Array(9).keys());

  return (
    <>
      <div className="bigBox">
        {numbers.map((value: number) => {
          return (
            <Box
              isFinish={props.isFinish}
              checkIsFinish={props.checkIsFinish}
              table={props.table}
              setTable={props.setTable}
              setRound={props.setRound}
              person={props.person}
              setPerson={props.setPerson}
              index={value.toString()}
            ></Box>
          );
        })}
      </div>
    </>
  );
};

export default BigBox;
