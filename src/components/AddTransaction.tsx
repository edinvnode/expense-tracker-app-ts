import React, { useState, useContext, FormEvent } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction as TransactionType } from "../context/GlobalState";

function AddTransaction() {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const context = useContext(GlobalContext);

  if (!context) {
    // Handle case where context is not provided
    return null;
  }

  const { addTransaction } = context;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTransaction: TransactionType = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
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
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
