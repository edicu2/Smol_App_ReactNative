import React from 'react';
import AppStack from './src/screens';

//redux 관련 
import store from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  console.log("<App.js>redux Connect-Check",store.getState())
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;