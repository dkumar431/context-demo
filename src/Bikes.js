import React, { useState } from "react";
import { useStore, useStoreDispatch } from "./store";

const divStyle = {
  width: "300px",
  border: "2px solid black",
};

const Bikes = () => {
  console.log("Bikes rerendered.");

  const { bikes } = useStore();
  const dispatch = useStoreDispatch();
  const [newBike, setNewBike] = useState("");

  return (
    <div style={divStyle}>
      <h3>Bikes</h3>

      <input
        type="text"
        value={newBike}
        onChange={(e) => setNewBike(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_BIKE", payload: newBike });
          setNewBike("");
        }}
      >
        Add
      </button>
      <ul>
        {bikes.map((bike) => (
          <li key={bike}>{bike}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bikes;
