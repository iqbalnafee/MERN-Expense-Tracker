import React ,{ createContext,useReducer } from 'react';

import AppReducer from './AppReducer'

//initial State
const initialState = {

    transactions: [

        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],

    profileState: [
        { name:"nafees",email:"test@gmail.com", phone:"00000000" },
    ]

    //if we dont use useReducer we have to handle this multiple states with useState in the following way

    // const GlobalContext = createContext();

    // const GlobalProvider = ({ children }) => {
    // const [transactions, setTransactions] = useState([]);
    // const [profileState, setProfileState] = useState([]);


    // return (
    //     <GameContext.Provider value={{ transactions: [transactions, setTransactions], profileState: [profileState, setProfileState] }}>
    //     {children}
    //     </GameContext.Provider>
    // );
    // };

    // export { GameContext, GameProvider };

};

//now we need to create our global context using createContext

//create context 

export const GlobalContext = createContext(initialState); //we are bringing GlobalContext to other files into components

//in order to other components to excess to our store or global state (initial state) we need to have a provider

//provider component

export const GlobalProvider = ({children}) => {

    //children are <Header />
    //   <Balance />
    //   <IncomeExpense />
    //   <TransactionList />
    //   <AddTransaction />

    const [state,dispatch] = useReducer(AppReducer,initialState);

    //useReducer an alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

    //useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

    // const initialState = {count: 0};

    //This reducer function look like our AppReducer

    // function reducer(state, action) {
    // switch (action.type) {
    //     case 'increment':
    //     return {count: state.count + 1};
    //     case 'decrement':
    //     return {count: state.count - 1};
    //     default:
    //     throw new Error();
    // }
    // }

    // function Counter() {
    // const [state, dispatch] = useReducer(reducer, initialState);
    // return (
    //     <>
    //     Count: {state.count}
    //     <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    //     <button onClick={() => dispatch({type: 'increment'})}>+</button>
    //     </>
    // );
    // }

    const deleteTransaction = (id) =>{

        dispatch({
            type : 'DELETE_TRANSACTION', 
            payload : id
        });
    }

    return (

        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction
        }}>

            {children}
        </GlobalContext.Provider>
    );

}
