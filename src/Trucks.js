import React, { useState } from "react";
import { useStore, useStoreDispatch } from "./store";

const divStyle = {
  width: "300px",
  border: "2px solid black",
};

const Trucks = () => {
  console.log("Trucks rerendered.");

  const { trucks } = useStore();
  const dispatch = useStoreDispatch();
  const [newTruck, setNewTruck] = useState("");

  return (
    <div style={divStyle}>
      <h3>Trucks</h3>

      <input
        type="text"
        value={newTruck}
        onChange={(e) => setNewTruck(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TRUCK", payload: newTruck });
          setNewTruck("");
        }}
      >
        Add
      </button>
      <ul>
        {trucks.map((truck) => (
          <li key={truck}>{truck}</li>
        ))}
      </ul>
    </div>
  );
};

export default Trucks;
