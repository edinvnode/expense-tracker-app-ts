import React, { createContext, useReducer, ReactNode } from "react";
import AppReducer from "./AppReducer";

// types
export interface Transaction {
  id: number;
  text: string;
  amount: number;
}

// State type
interface State {
  transactions: Transaction[];
}

// Initial state
const initialState: State = {
  transactions: [],
};

// Create context with the correct type
interface GlobalContextType extends State {
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: Transaction) => void;
  transactions: Transaction[];
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

// Provider component
interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction: Transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
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
