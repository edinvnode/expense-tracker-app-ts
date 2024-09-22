import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

interface SingleTransaction {
  transaction: {
    id: number;
    text: string;
    amount: number;
  };
}

function Transaction({ transaction }: SingleTransaction) {
  const context = useContext(GlobalContext);

  if (!context) {
    // Handle case where context is not available
    return null;
  }

  const { deleteTransaction } = context;

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
}

export default Transaction;
