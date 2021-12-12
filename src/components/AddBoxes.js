import React, { useState } from "react";

const AddBoxes = (props) => {
  const [color, setColor] = useState("");

  const createBox = (e) => {
    e.preventDefault();
    props.newBox(color);
    setColor("");
  };

  return (
    <div>
      <form onSubmit={createBox}>
        <label>Enter a Color: </label>
        <input
          type="text"
          className="rounded border-2 border-blue-500"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddBoxes;
