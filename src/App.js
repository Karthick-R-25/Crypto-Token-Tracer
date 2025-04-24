import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CryptoTable from './components/cryptoheader';

function App() {
  

  return (
      <Provider store={store}>
      <div >
        <h1 className="token">Crypto TokenTracer</h1>
        <CryptoTable />
      </div>
      </Provider>
   
  );
}

export default App;
