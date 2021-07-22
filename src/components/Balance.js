import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map( (transaction) => (transaction.amount) );

    console.log(amounts);

    const balance = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);

    return (
        <div>
            <h4  style={{marginTop:"10px"}}>Your Balance</h4>
            <h1 >${balance}</h1>
        </div>
    )
}

export default Balance
