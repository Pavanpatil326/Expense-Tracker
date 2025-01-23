import React from 'react';
import { Header } from './Components/Header';   
 import './App.css';
import { IncomExpenses } from './Components/IncomExpenses';
import { TransactionList } from './Components/TransactionList';
import { Balance } from './Components/Balance';
import { Addtransaction } from './Components/Addtransaction';

import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
   <Balance />
   <IncomExpenses />
   <TransactionList />
   <Addtransaction /> 

      </div>
      </GlobalProvider>
    );
};

export default App;
