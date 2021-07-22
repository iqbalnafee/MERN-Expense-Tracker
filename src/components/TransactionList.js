import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';


import Transaction from './Transaction';

const TransactionList = () => {

    //const context = useContext(GlobalContext);

    const {transactions} = useContext(GlobalContext);

    console.log(transactions);

    //useContext documentation:

    // Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

    //Below is an example of useContext

    // const themes = {
    //     light: {
    //       foreground: "#000000",
    //       background: "#eeeeee"
    //     },
    //     dark: {
    //       foreground: "#ffffff",
    //       background: "#222222"
    //     }
    //   };
      
    // const ThemeContext = React.createContext(themes.light);
    
    // function App() {
    // return (
    //     <ThemeContext.Provider value={themes.dark}>
    //     <Toolbar />
    //     </ThemeContext.Provider>
    // );
    // }
    
    // function Toolbar(props) {
    // return (
    //     <div>
    //     <ThemedButton />
    //     </div>
    // );
    // }
    
    // function ThemedButton() {
    // const theme = useContext(ThemeContext);
    // return (
    //     <button style={{ background: theme.background, color: theme.foreground }}>
    //     I am styled by theme context!
    //     </button>
    // );
    // }

    return (
        <>
          <h3>History</h3>
            <ul  className="list">

                {
                    transactions.map( (transaction) => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ) )
                }

                
            </ul>  
        </>
    )
}

export default TransactionList
