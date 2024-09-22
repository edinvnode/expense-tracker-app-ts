import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
import { Transaction as TransactionType } from "../context/GlobalState";

function TransactionList() {
  const context = useContext(GlobalContext);

  if (!context) {
    // Handle the case where context is not provided
    return null;
  }

  const { transactions } = context;

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction: TransactionType) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
