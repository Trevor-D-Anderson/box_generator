import React from "react";

const Boxes = (props) => {
  const { newBoxColor } = props;
  return (
    <div className=" flex flex-row justify-around">
      {newBoxColor.map((color, i) => {
        return (
          <div
            key={i}
            className="w-24 h-24"
            style={{ backgroundColor: `${color}` }}
          ></div>
        );
      })}
    </div>
  );
};
export default Boxes;
