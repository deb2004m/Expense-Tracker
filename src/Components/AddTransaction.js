import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [tittle, setTittle] = useState("");
  const [amount, setAmount] = useState("");
  const [catagory, setCatagory] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      tittle,
      amount: +amount,
      catagory,
      date: new Date().toISOString().split("T")[0],
    };

    addTransaction(newTransaction);
    setTittle("");
    setAmount(0);
  };
  return (
    <div className="form-card">
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="text">
            Text
          </label>
          <input
            className="form-input"
            type="text"
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            className="form-input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="catagory">
            Category
          </label>
          <input
            className="form-input"
            type="text"
            value={catagory}
            onChange={(e) => setCatagory(e.target.value)}
            placeholder="Enter category..."
          />
        </div>
        <div className="btn-group">
          <button className="btn btn-income"> +Add incom</button>

          <button className="btn btn-expense">-Add Expenses</button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
