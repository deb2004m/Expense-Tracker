import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="balance-card">
      <div className="balance-title">Your Balance</div>
      <div className="balance-amount">
        <h1>${total}</h1>
      </div>
    </div>
  );
};

export default Balance;
