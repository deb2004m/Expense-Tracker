import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initalState = {
  transactions: [],
};
export const GlobalContext = createContext(initalState);
//provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  // Fetch transactions from backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/expenses")
      .then((res) => {
        dispatch({
          type: "SET_TRANSACTIONS",
          payload: res.data,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  // Delete transaction
  async function deleteTransaction(id) {
    await axios.delete(`http://localhost:8080/api/expenses/${id}`);
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  // Add transaction
  async function addTransaction(transaction) {
    const res = await axios.post(
      "http://localhost:8080/api/expenses",
      transaction
    );
    dispatch({
      type: "ADD_TRANSACTION",
      payload: res.data,
    });
  }
  // // Actions
  // function deleteTransaction(id) {
  //   dispatch({
  //     type: "DELETE_TRANSACTION",
  //     payload: id,
  //   });
  // }
  // // Addtransaction
  // function addTransaction(id) {
  //   dispatch({
  //     type: "ADD_TRANSACTION",
  //     payload: id,
  //   });
  // }

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
