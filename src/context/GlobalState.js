import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initalState = {
  transactions: [],
};
export const GlobalContext = createContext(initalState);
//provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  // Addtransaction
  function addTransaction(id) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
