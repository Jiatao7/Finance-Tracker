import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Context
import { UserContextProvider } from './context/UserContext';
import { TransactionContextProvider } from './context/TransactionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <UserContextProvider>
      <TransactionContextProvider>
        <App />
      </TransactionContextProvider>
    </UserContextProvider>
  //</React.StrictMode>
);