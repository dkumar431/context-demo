import React, { createContext, useContext, useReducer } from "react";

const MyContext = createContext({});
const MyDispatchContext = createContext({});

const initialState = {
  cars: [],
  bikes: [],
  trucks: [],
  message: "Hello Context",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CAR":
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case "ADD_BIKE":
      return {
        ...state,
        bikes: [...state.bikes, action.payload],
      };
    case "ADD_TRUCK":
      return {
        ...state,
        trucks: [...state.trucks, action.payload],
      };
    default:
      return state;
  }
};
export default function MyContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={state}>
      <MyDispatchContext.Provider value={dispatch}>
        {children}
      </MyDispatchContext.Provider>
    </MyContext.Provider>
  );
}

export function useStore() {
  const state = useContext(MyContext);
  return state;
}

export function useStoreDispatch() {
  const dispatch = useContext(MyDispatchContext);
  return dispatch;
}
