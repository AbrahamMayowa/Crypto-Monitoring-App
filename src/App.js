import React from 'react';
import ConvertForm from './converterForm';
import {Provider} from 'react-redux';
import {store} from './redux/storeConfiguration';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

      <ConvertForm />
      
      </Provider>
     
     
    </div>
  );
}

export default App;
