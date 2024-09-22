import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const context = useContext(GlobalContext);

  if (!context) {
    // Handle the case where the context is undefined
    return null;
  }
  const { transactions } = context;

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{total}</h1>
    </>
  );
}

export default Balance;
