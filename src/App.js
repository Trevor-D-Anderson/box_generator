import React, { useState } from "react";
import "./App.css";
import AddBoxes from "./components/AddBoxes";
import Boxes from "./components/Boxes";

function App() {
  const [newBoxColor, setNewBoxColor] = useState([]);

  const newColor = (newThing) => {
    setNewBoxColor([...newBoxColor, newThing]);
  };
  return (
    <div className="App">
      <AddBoxes newBox={newColor} />
      <Boxes newBoxColor={newBoxColor} />
    </div>
  );
}

export default App;
