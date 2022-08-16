import React from "react";
import "./box.css";

const Box = (props: any) => {
  const handleClick = () => {
    console.log(props.index);
  };
  return (
    <>
      <div
        style={{ color: props.color }}
        onClick={handleClick}
        data-cell-index={props.index}
        className="box"
      >
        {props.index}
      </div>
    </>
  );
};

export default Box;
