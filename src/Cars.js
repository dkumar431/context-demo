import React, { useState } from "react";
import { useStore, useStoreDispatch } from "./store";
import withStateSlice from "./utils";

const divStyle = {
  width: "300px",
  border: "2px solid black",
};

const Cars = ({ state: cars }) => {
  console.log("Cars rerendered.", cars);
  const dispatch = useStoreDispatch();

  const [newcar, setNewCar] = useState("");
  return (
    <div style={divStyle}>
      <h3>Cars</h3>

      <input
        type="text"
        value={newcar}
        onChange={(e) => setNewCar(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_CAR", payload: newcar });
          setNewCar("");
        }}
      >
        Add
      </button>
      <ul>
        {cars.map((car) => (
          <li key={car}>{car}</li>
        ))}
      </ul>
    </div>
  );
};

export default withStateSlice(Cars, (state) => {
  const { cars } = state;
  return cars;
});
