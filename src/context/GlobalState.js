import React ,{ createContext,useReducer } from 'react';

//initial State
const initialState = {

    transactions: [

        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]

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

    return (

        <GlobalContext.Provider value={{
            transactions:state.transactions
        }}>

            {children}
        </GlobalContext.Provider>
    );

}
