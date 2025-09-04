import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [tittle, setTittle] = useState("");
  const [amount, setAmount] = useState(0);
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
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="catagory">Category</label>
          <input
            type="text"
            value={catagory}
            onChange={(e) => setCatagory(e.target.value)}
            placeholder="Enter category..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
