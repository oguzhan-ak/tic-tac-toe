import React, { useState } from "react";
import "./box.css";

const Box = (props: any) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (!props.isFinish) {
      if (props.table[props.index] === "") {
        if (props.person === 0) {
          setValue("X");
        } else {
          setValue("O");
        }
        props.setPerson(props.person === 0 ? 1 : 0);
        props.setRound((prev: any) => prev + 1);
        var table = props.table;
        table[props.index] = props.person === 0 ? "X" : "O";
        props.setTable(table);
        props.checkIsFinish();
      }
    }
  };
  return (
    <>
      <div
        style={{ color: value === "X" ? "red" : "blue" }}
        onClick={handleClick}
        data-cell-index={props.index}
        className="box"
      >
        {props.table[props.index]}
      </div>
    </>
  );
};

export default Box;
