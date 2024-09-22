// types
interface Transaction {
    id: number;
    text: string;
    amount: number;
  }
  
  interface State {
    transactions: Transaction[];
  }
  
  interface DeleteTransactionAction {
    type: "DELETE_TRANSACTION";
    payload: number;
  }
  
  interface AddTransactionAction {
    type: "ADD_TRANSACTION";
    payload: Transaction;
  }
  
  type Action = DeleteTransactionAction | AddTransactionAction;
  
  export default (state: State, action: Action): State => {
    switch (action.type) {
      case "DELETE_TRANSACTION":
        return {
          ...state,
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== action.payload
          ),
        };
  
      case "ADD_TRANSACTION":
        return {
          ...state,
          transactions: [action.payload, ...state.transactions],
        };
  
      default:
        return state;
    }
  };
  