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
              color={value % 2 == 0 ? "red" : "blue"}
              index={value.toString()}
              value={null}
            ></Box>
          );
        })}
      </div>
    </>
  );
};

export default BigBox;
