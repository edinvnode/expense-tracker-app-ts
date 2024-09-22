import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num: number) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

function IncomeExpenses() {
  const context = useContext(GlobalContext);

  if (!context) {
    // Handle the case where the context is undefined
    return null;
  }
  const { transactions } = context;

  //const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item: number) => item > 0)
    .reduce((acc: number, item: number) => (acc += item), 0);

  const expense =
    amounts
      .filter((item: number) => item < 0)
      .reduce((acc: number, item: number) => (acc += item), 0) * -1;
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
