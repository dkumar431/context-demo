import React from "react";
import { useStore, useStoreDispatch } from "./store";

const Bikes = () => {
  //const { message } = useStore();
  console.log("Bikes rerendered.");
  return <div style={{ width: '200px', height: '100px' }}>Bikes</div>;
}

export default Bikes;