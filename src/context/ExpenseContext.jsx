import { Children, createContext, useEffect, useReducer } from "react";

const Expensecontext = createContext();

const initialState = {
  expenses: [],
  loading: false,
  error: null,
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload.id
        ),
      };
    case "UPDATE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload.id ? action.payload : expense
        ),
      };
    case "SET_EXPENSES":
      return {
        ...state,
        expenses: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const ExpenseProvider = ({ Children }) => {
    const [state,dispatch]=useReducer(expenseReducer,initialState);

    //save expense to local storage whenever they change
    useEffect(()=>{
        try{
            localStorage.setItem("expenses",JSON.stringify(state.expenses));
        }catch(error){
            console.error("Failed to save expenses to local storage: ",error)
        }
    },[state.expenses])


  return <Expensecontext.Provider value={{}}></Expensecontext.Provider>;
};
