import React from "react";
import { useStore, useStoreDispatch } from "./store";


const Users = () => {
  //const { message } = useStore();
  console.log("Users rerendered.");
  return <div style={{ width: '200px', height: '100px' }}>Users</div>;
}

export default React.memo(Users);