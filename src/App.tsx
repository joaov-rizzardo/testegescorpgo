import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Listagem } from './pages/Listagem';
import './styles/global.scss'
function App() {

  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Listagem}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
